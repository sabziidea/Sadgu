const room = document.querySelector("#memory-room");
const dialog = document.querySelector("#memory-dialog");
const toast = document.querySelector(".toast");
const promptInput = document.querySelector("#memory-prompt");
let selectedSpace = "ideas";

const imageLibrary = [
  { words: ["sea", "ocean", "beach", "water"], url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85" },
  { words: ["mountain", "hike", "snow"], url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=85" },
  { words: ["home", "room", "cabin", "house"], url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=700&q=85" },
  { words: ["flower", "garden", "spring"], url: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=85" },
  { words: ["city", "travel", "street"], url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=700&q=85" },
  { words: [], url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=85" },
];

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

document.querySelectorAll(".view-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".view-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    room.classList.toggle("top-view", button.dataset.view === "top");
  });
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".memory-card").forEach((card) => {
      const show = button.dataset.filter === "all" || card.dataset.space === button.dataset.filter || (button.dataset.filter === "favorites" && card.querySelector(".heart").classList.contains("active"));
      card.classList.toggle("hidden", !show);
    });
    document.querySelector(".sidebar").classList.remove("open");
  });
});

room.addEventListener("click", (event) => {
  const heart = event.target.closest(".heart");
  if (!heart) return;
  heart.classList.toggle("active");
  heart.textContent = heart.classList.contains("active") ? "♥" : "♡";
  heart.setAttribute("aria-label", heart.classList.contains("active") ? "Remove from favorites" : "Favorite this memory");
});

function openDialog(text = "") {
  document.querySelector("#dialog-prompt").value = text;
  dialog.showModal();
  setTimeout(() => document.querySelector("#dialog-prompt").focus(), 50);
}

document.querySelector("#add-memory").addEventListener("click", () => openDialog());
document.querySelector(".attach").addEventListener("click", () => openDialog(promptInput.value));
document.querySelector(".close-dialog").addEventListener("click", () => dialog.close());
document.querySelector(".mobile-menu").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("open"));

document.querySelectorAll(".chips button").forEach((chip) => chip.addEventListener("click", () => {
  document.querySelectorAll(".chips button").forEach((item) => item.classList.remove("active"));
  chip.classList.add("active");
  selectedSpace = chip.textContent.includes("Inspiration") ? "inspiration" : chip.textContent.includes("reminder") ? "remember" : "ideas";
}));

function createMemory(text) {
  const lower = text.toLowerCase();
  const match = imageLibrary.find((image) => image.words.some((word) => lower.includes(word))) || imageLibrary.at(-1);
  const card = document.createElement("article");
  card.className = "memory-card card-wide new-card";
  card.dataset.space = selectedSpace;
  card.tabIndex = 0;
  card.style.left = `${28 + Math.random() * 30}%`;
  card.style.top = `${35 + Math.random() * 45}px`;
  card.innerHTML = `<button class="heart" aria-label="Favorite this memory">♡</button><img src="${match.url}" alt="Visual memory for ${text.replaceAll('"', "&quot;")}" /><div class="card-note"><p>${text}</p><small>${selectedSpace.toUpperCase()}</small></div>`;
  room.appendChild(card);
  showToast("Your memory has found its place.");
}

document.querySelector("#memory-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const text = promptInput.value.trim();
  if (!text) return promptInput.focus();
  createMemory(text);
  promptInput.value = "";
});

document.querySelector("#dialog-form").addEventListener("submit", (event) => {
  event.preventDefault();
  createMemory(document.querySelector("#dialog-prompt").value.trim());
  dialog.close();
});

document.querySelector("#sound-toggle").addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("active");
  showToast(event.currentTarget.classList.contains("active") ? "Ambient sound on" : "Ambient sound off");
});

document.querySelector(".share-button").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(location.href); showToast("Place link copied."); }
  catch { showToast("Your place is ready to share."); }
});
