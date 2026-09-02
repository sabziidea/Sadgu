const input = document.querySelector("#prompt-input");
const form = document.querySelector("#prompt-form");
const diagram = document.querySelector("#diagram");
const grid = document.querySelector("#diagram-grid");
const emptyState = document.querySelector("#empty-state");
const historyEl = document.querySelector("#history");
const titleEl = document.querySelector("#flow-title");
const toast = document.querySelector("#toast");
let zoom = 1;

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
  })[character]);
}

const iconPaths = {
  start: '<circle cx="12" cy="12" r="7"/><path d="m10 9 5 3-5 3Z"/>',
  idea: '<path d="M9 18h6M10 22h4"/><path d="M8.2 15.1A7 7 0 1 1 15.8 15c-1.1.8-1.3 1.7-1.3 2h-5c0-.4-.2-1.2-1.3-1.9Z"/>',
  data: '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  people: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20c0-4 2.7-6 6-6s6 2 6 6M15 15c3 0 5 1.7 5 5"/>',
  process: '<path d="M4 7h12M13 4l3 3-3 3M20 17H8M11 14l-3 3 3 3"/>',
  shield: '<path d="M12 3 5 6v5c0 4.8 2.9 8.1 7 10 4.1-1.9 7-5.2 7-10V6Z"/><path d="m9 12 2 2 4-4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',
  finish: '<path d="m5 12 4 4L19 6"/>',
};

function pickIcon(text, index) {
  const word = text.toLowerCase();
  if (/internet|web|world|network/.test(word)) return "globe";
  if (/user|people|team|customer/.test(word)) return "people";
  if (/data|store|database|memory/.test(word)) return "data";
  if (/safe|secure|protect/.test(word)) return "shield";
  if (/idea|think|plan|light/.test(word)) return "idea";
  return index === 0 ? "start" : index === 3 ? "finish" : "process";
}

const explainers = {
  internet: [
    ["Your device", "You enter a request in your browser."],
    ["Find the address", "DNS translates the website name into an IP address."],
    ["Travel the network", "Small data packets move through routers and cables."],
    ["Server responds", "The server sends the requested page back to your screen."],
  ],
  photosynthesis: [
    ["Sunlight arrives", "Leaves capture energy from the sun."],
    ["Roots gather", "Water travels from the soil up through the plant."],
    ["Leaves combine", "Carbon dioxide and water become sugar using light."],
    ["Energy & oxygen", "Sugar fuels the plant while oxygen is released."],
  ],
  launch: [
    ["Define the goal", "Choose the audience, problem, and outcome."],
    ["Build the story", "Shape your message and product experience."],
    ["Reach people", "Coordinate content, channels, and your launch team."],
    ["Learn & improve", "Measure response, gather feedback, and iterate."],
  ],
};

function generateSteps(prompt) {
  const key = Object.keys(explainers).find((item) => prompt.toLowerCase().includes(item));
  if (key) return explainers[key];
  const subject = prompt.replace(/^(explain|how does|how do|what is|show me|describe)\s+/i, "").replace(/[?.!]$/, "");
  return [
    ["Begin", `Start with the core purpose of ${subject}.`],
    ["Key inputs", "Identify the people, information, or resources involved."],
    ["Main process", "The inputs move through a connected series of actions."],
    ["Result", "The process produces an outcome you can observe and improve."],
  ];
}

function iconSvg(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name]}</svg>`;
}

function drawConnectors() {
  const svg = document.querySelector("#connectors");
  const nodes = [...grid.querySelectorAll(".node")];
  if (!nodes.length) return;
  const diagramRect = diagram.getBoundingClientRect();
  svg.innerHTML = nodes.slice(0, -1).map((node, i) => {
    const a = node.getBoundingClientRect(); const b = nodes[i + 1].getBoundingClientRect();
    const x1 = (a.right - diagramRect.left) / zoom; const y1 = (a.top + a.height / 2 - diagramRect.top) / zoom;
    const x2 = (b.left - diagramRect.left) / zoom; const y2 = (b.top + b.height / 2 - diagramRect.top) / zoom;
    return `<path class="connector" d="M ${x1} ${y1} C ${x1 + 25} ${y1}, ${x2 - 25} ${y2}, ${x2} ${y2}"/>`;
  }).join("");
}

function saveHistory(prompt) {
  const history = JSON.parse(localStorage.getItem("flowly-history") || "[]");
  const next = [prompt, ...history.filter((item) => item !== prompt)].slice(0, 6);
  localStorage.setItem("flowly-history", JSON.stringify(next)); renderHistory();
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("flowly-history") || "[]");
  historyEl.innerHTML = history.length ? history.map((item, i) => `<button class="${i === 0 ? "active" : ""}" data-prompt="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join("") : '<button disabled>No explanations yet</button>';
  historyEl.querySelectorAll("[data-prompt]").forEach((button) => button.addEventListener("click", () => createFlow(button.dataset.prompt)));
}

function createFlow(prompt, save = true) {
  if (!prompt.trim()) return;
  const button = document.querySelector("#generate-button"); button.classList.add("loading"); button.querySelector("span").textContent = "Thinking…";
  setTimeout(() => {
    const steps = generateSteps(prompt);
    grid.innerHTML = `<div class="flow-heading"><span class="tag">Visual explanation</span><h2>${escapeHtml(prompt)}</h2><p>A simple, step-by-step view</p></div>` + steps.map(([name, copy], i) => `<article class="node" style="animation-delay:${i * 100}ms"><div class="node-icon">${iconSvg(pickIcon(`${name} ${copy}`, i))}</div><span class="node-index">STEP 0${i + 1}</span><h3>${escapeHtml(name)}</h3><p>${escapeHtml(copy)}</p></article>`).join("");
    emptyState.hidden = true; diagram.hidden = false; titleEl.textContent = prompt.length > 42 ? `${prompt.slice(0, 42)}…` : prompt; input.value = ""; input.style.height = "auto";
    button.classList.remove("loading"); button.querySelector("span").textContent = "Generate"; if (save) saveHistory(prompt);
    requestAnimationFrame(drawConnectors);
  }, 620);
}

function playDemo() {
  createFlow("How does the internet work?", false);
  setTimeout(() => {
    const nodes = [...grid.querySelectorAll(".node")];
    nodes.forEach((node, index) => setTimeout(() => {
      nodes.forEach((item) => item.classList.remove("demo-highlight"));
      node.classList.add("demo-highlight");
    }, index * 700));
    setTimeout(() => nodes.at(-1)?.classList.remove("demo-highlight"), nodes.length * 700 + 900);
  }, 800);
}

form.addEventListener("submit", (event) => { event.preventDefault(); createFlow(input.value); });
input.addEventListener("input", () => { input.style.height = "auto"; input.style.height = `${input.scrollHeight}px`; });
input.addEventListener("keydown", (event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); form.requestSubmit(); } });
document.querySelectorAll("#suggestions button").forEach((button) => button.addEventListener("click", () => createFlow(button.textContent)));
document.querySelector("#watch-demo").addEventListener("click", playDemo);
document.querySelector("#demo-button").addEventListener("click", playDemo);
document.querySelector("#new-flow").addEventListener("click", () => { diagram.hidden = true; emptyState.hidden = false; titleEl.textContent = "Untitled explanation"; input.focus(); document.querySelector("#sidebar").classList.remove("open"); });
document.querySelector("#menu-button").addEventListener("click", () => document.querySelector("#sidebar").classList.toggle("open"));
document.querySelector("#theme-toggle").addEventListener("click", () => document.body.classList.toggle("dark"));
document.querySelector("#reset-view").addEventListener("click", () => setZoom(1));
function setZoom(value) { zoom = Math.max(.7, Math.min(1.3, value)); diagram.style.transform = `scale(${zoom})`; document.querySelector("#zoom-value").textContent = `${Math.round(zoom * 100)}%`; requestAnimationFrame(drawConnectors); }
document.querySelector("#zoom-in").addEventListener("click", () => setZoom(zoom + .1));
document.querySelector("#zoom-out").addEventListener("click", () => setZoom(zoom - .1));
document.querySelector("#export-button").addEventListener("click", () => { navigator.clipboard?.writeText(grid.innerText); toast.textContent = "Explanation copied to clipboard"; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2000); });
window.addEventListener("resize", drawConnectors); renderHistory();
if (new URLSearchParams(window.location.search).has("demo")) playDemo();
