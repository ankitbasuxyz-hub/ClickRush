// Get the elements we need
const startScreen = document.querySelector("#startScreen");
const gameScreen = document.querySelector("#gameScreen");
const resultScreen = document.querySelector("#resultScreen");

const startButton = document.querySelector("#startButton");
const target = document.querySelector("#target");
const gameArena = document.querySelector("#gameArena");
const playAgainButton = document.querySelector("#playAgainButton");
const homeButton = document.querySelector("#homeButton");

const scoreDisplay = document.querySelector("#score");
const timerDisplay = document.querySelector("#timer");
const bestDisplay = document.querySelector("#best");
const startBestDisplay = document.querySelector("#startBest");
const finalScoreDisplay = document.querySelector("#finalScore");
const resultBestDisplay = document.querySelector("#resultBest");
const resultMessage = document.querySelector("#resultMessage");

const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector("#themeIcon");

// Game variables
let score = 0;
let timeLeft = 30;
let timer;

// Load the saved best score
let bestScore = Number(localStorage.getItem("clickRushBest")) || 0;

// Show the best score when the page opens
updateBestScore();

// Start the game
startButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", startGame);
homeButton.addEventListener("click", showHome);

// When the target is clicked, increase the score and move it
target.addEventListener("click", function () {
  if (timeLeft <= 0) {
    return;
  }

  score++;
  scoreDisplay.textContent = score;

  // Small score animation
  scoreDisplay.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.2)" },
      { transform: "scale(1)" }
    ],
    { duration: 180 }
  );

  moveTarget();
});

// Start a new game
function startGame() {
  clearInterval(timer);

  score = 0;
  timeLeft = 30;

  scoreDisplay.textContent = score;
  timerDisplay.textContent = timeLeft + "s";

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  moveTarget();

  // Start the countdown
  timer = setInterval(function () {
    timeLeft--;
    timerDisplay.textContent = timeLeft + "s";

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

// Move the target to a random position
function moveTarget() {
  const padding = 45;

  const maxX = gameArena.clientWidth - padding;
  const maxY = gameArena.clientHeight - padding - 10;

  const randomX = Math.floor(Math.random() * (maxX - padding) + padding);
  const randomY = Math.floor(Math.random() * (maxY - padding) + padding);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

// End the game
function endGame() {
  clearInterval(timer);
  timeLeft = 0;
  timerDisplay.textContent = "0s";

  // Save a new best score
  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem("clickRushBest", bestScore);
  }

  updateBestScore();

  finalScoreDisplay.textContent = score;
  resultBestDisplay.textContent = bestScore;

  // Choose a simple message based on the score
  if (score >= 40) {
    resultMessage.innerHTML =
      "<strong>Speed Demon! ⚡</strong><span>That reaction speed is wild!</span>";
  } else if (score >= 20) {
    resultMessage.innerHTML =
      "<strong>Nice! 🔥</strong><span>You're getting seriously fast!</span>";
  } else {
    resultMessage.innerHTML =
      "<strong>Warm-up! 💪</strong><span>Try again and beat your score.</span>";
  }

  gameScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
}

// Update all best-score displays
function updateBestScore() {
  bestDisplay.textContent = bestScore;
  startBestDisplay.textContent = bestScore;
  resultBestDisplay.textContent = bestScore;
}

// Return to the home screen
function showHome() {
  clearInterval(timer);

  gameScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");

  scoreDisplay.textContent = "0";
  timerDisplay.textContent = "30s";
}

// Load saved theme
const savedTheme = localStorage.getItem("clickRushTheme");

if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeIcon.textContent = "🌙";
}

// Toggle dark/light mode
themeToggle.addEventListener("click", function () {
  const isDark =
    document.documentElement.getAttribute("data-theme") === "dark";

  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    themeIcon.textContent = "☀️";
    localStorage.setItem("clickRushTheme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.textContent = "🌙";
    localStorage.setItem("clickRushTheme", "dark");
  }
});

// Keep the target inside the arena if the window is resized
window.addEventListener("resize", function () {
  if (!gameScreen.classList.contains("hidden")) {
    moveTarget();
  }
});
