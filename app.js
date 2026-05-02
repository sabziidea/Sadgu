const sections = [
  {
    title: "Index 1: Dhyan",
    content:
      "Yeh section dhyan ki basic practice ke liye hai. Roz 10 minute saans par dhyan dene ki aadat banayein.",
  },
  {
    title: "Index 2: Anand",
    content:
      "Is section mein anand ko andar se develop karne ke simple points hain: gratitude, silence, mindful living.",
  },
  {
    title: "Index 3: Jeevan",
    content:
      "Yeh section daily life balance par hai: sehat, samay aur emotional clarity ke saath jeena.",
  },
];

const cbtRecords = [
  { name: "CBT Alpha", score: 92, metrics: { Focus: 90, Calm: 95, Clarity: 88 } },
  { name: "CBT Beta", score: 85, metrics: { Focus: 80, Calm: 88, Clarity: 86 } },
  { name: "CBT Gamma", score: 78, metrics: { Focus: 75, Calm: 80, Clarity: 79 } },
];

const pages = document.querySelectorAll(".page");

function showPage(id) {
  pages.forEach((page) => page.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function renderIndexes() {
  const list = document.getElementById("index-list");
  list.innerHTML = "";

  sections.forEach((section) => {
    const button = document.createElement("button");
    button.className = "index-item";
    button.textContent = section.title;
    button.addEventListener("click", () => {
      const article = document.getElementById("content-article");
      article.innerHTML = `<h3>${section.title}</h3><p>${section.content}</p>`;
      showPage("content-page");
    });
    list.appendChild(button);
  });
}

function renderCBTList() {
  const list = document.getElementById("cbt-list");
  const sorted = [...cbtRecords].sort((a, b) => b.score - a.score);

  list.innerHTML = "";
  sorted.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "cbt-item";
    button.innerHTML = `<strong>#${index + 1} ${item.name}</strong><br />Score: ${item.score}`;
    button.addEventListener("click", () => renderChart(item));
    list.appendChild(button);
  });

  renderChart(sorted[0]);
}

function renderChart(cbt) {
  const chart = document.getElementById("chart-area");
  const rows = Object.entries(cbt.metrics)
    .map(
      ([label, value]) => `
      <div class="bar-row">
        <div class="bar-label"><span>${label}</span><span>${value}%</span></div>
        <div class="bar"><div class="bar-fill" style="width: ${value}%"></div></div>
      </div>`
    )
    .join("");

  chart.innerHTML = `<h3>${cbt.name} Chart</h3>${rows}`;
}

function setupNavigation() {
  document.querySelectorAll(".back-btn").forEach((button) => {
    button.addEventListener("click", () => showPage(button.dataset.target));
  });

  document.getElementById("open-cbt").addEventListener("click", () => {
    renderCBTList();
    showPage("cbt-page");
  });

  document.getElementById("open-chat").addEventListener("click", () => {
    const chatUrl =
      "https://chatgpt.com/g/g-p-69e06daa45d88191a6cc9b2eb394a91e-sadguru/c/69e06e1e-1be0-83a5-a23c-10f6ccd71e15";
    window.open(chatUrl, "_blank");
  });
}

renderIndexes();
setupNavigation();
