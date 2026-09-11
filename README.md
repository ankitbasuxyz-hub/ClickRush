# ⚡ ClickRush

**A fast-paced reaction game — click the moving target before time runs out.**

🔗 **Live Demo:** [https://ankitbasuxyzhub.github.io/ClickRush/]


🎥 **Video Demo:** [https://youtu.be/vS0EfRwis6Y]

## 📸 Screenshot



<img width="996" height="615" alt="Image" src="https://github.com/user-attachments/assets/0a2a7f3b-ccf6-4da4-a72a-0adfee1d9f78" />



---

## 🎮 What is it?

ClickRush is a small, fun, and interactive reaction-clicking web game built for a Web Development / Frontend prototype submission.

The player gets **30 seconds** to click a moving target as many times as possible. Every click increases the score and moves the target to a new random position.

The goal is simple: **beat your best score.**

---

## ✨ Features

- 30-second reaction challenge
- Random target movement
- Live score counter
- Best score saved with `localStorage`
- Game-over result screen
- Play Again and Home buttons
- Light/Dark mode
- Smooth CSS animations
- Responsive mobile layout
- No backend or external JavaScript libraries

---

## 🛠️ Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Browser `localStorage`

---

## 🚀 How to Run

1. Download or clone the repository.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in a browser.

No installation or server is required.

---

## 🕹️ How to Play

1. Click **START GAME**.
2. Find and click the target.
3. Each click adds 1 point.
4. The target moves after every click.
5. Keep clicking until the 30-second timer reaches zero.
6. Try to beat your Best Score.

---

## 👆 Meaningful User Interactions

1. **Start Game** — starts the timer and gameplay.
2. **Click Target** — increases the score and changes the target position.
3. **Play Again / Home** — controls the game flow.
4. **Dark Mode Toggle** — changes the visual theme.
5. **Best Score** — automatically saves the highest score.

---

## 🧠 How It Works (Code Overview)

### HTML
HTML creates the structure of the page: the header, statistics cards, buttons, game arena, and result screen.

### CSS
CSS controls the design: colors, gradients, cards, responsive layout, animations, and dark mode.

### JavaScript
JavaScript makes the website interactive. It starts the game, counts down the timer, increases the score, moves the target, and saves the best score.

**Start button**
An `addEventListener()` waits for the Start button to be clicked and then calls `startGame()`.

**Score**
When the target is clicked, the `score` variable increases by 1 and the score displayed on the page is updated.

**Timer**
`setInterval()` runs once every second and decreases `timeLeft`. When it reaches zero, `endGame()` is called.

**Random target**
`Math.random()` creates random X and Y values so the target appears in different places.

**localStorage**
`localStorage` stores the best score and selected theme in the browser, so they remain after refreshing the page.

**Dark mode**
A button adds or removes the `data-theme="dark"` attribute. CSS variables then change the colors.

---

## 📄 License

This project is open for educational and demonstration purposes.
