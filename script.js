const colorBtn = document.getElementById("colorBtn");
const colorCode = document.getElementById("colorCode");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");
const favBtn = document.getElementById("favBtn");
const favorites = document.getElementById("favorites");
const clickSound = document.getElementById("clickSound");
const darkModeToggle = document.getElementById("darkModeToggle");

let currentColor = "#f0f0f0";

// Function to generate random hex color
function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6, "0")}`;
}

// Apply color to body and update text
function applyColor(color) {
  document.body.style.backgroundColor = color;
  colorCode.textContent = `Current Color: ${color}`;
  currentColor = color;
}

// Play sound
function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// Handle change color
colorBtn.addEventListener("click", () => {
  const newColor = getRandomColor();
  applyColor(newColor);
  playClickSound();
});

// Copy color code to clipboard
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(currentColor).then(() => {
    alert("Color code copied!");
  });
});

// Reset to default color
resetBtn.addEventListener("click", () => {
  applyColor("#f0f0f0");
  playClickSound();
});

// Save to favorites
favBtn.addEventListener("click", () => {
  const colorDiv = document.createElement("div");
  colorDiv.className = "favorite-color";
  colorDiv.style.backgroundColor = currentColor;
  colorDiv.title = currentColor;

  colorDiv.addEventListener("click", () => {
    applyColor(colorDiv.title);
    playClickSound();
  });

  favorites.appendChild(colorDiv);
});

// Dark mode toggle
darkModeToggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark-mode", e.target.checked);
});