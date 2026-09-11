# ⚡ ClickRush

**A fast-paced reaction game — click the moving target before time runs out.**

🔗 **Live Demo:** [https://ankitbasuxyzhub.github.io/ClickRush/]


🎥 **Video Demo:** [https://youtu.be/vS0EfRwis6Y]

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
## 🎤 Possible Viva Questions

**1. Why did you use HTML?**  
HTML creates the structure of the webpage.

**2. Why did you use CSS?**  
CSS is used for styling, layout, responsive design and animations.

**3. Why did you use JavaScript?**  
JavaScript adds the game logic and user interactions.

**4. What does `addEventListener()` do?**  
It waits for an event such as a button click.

**5. What does `setInterval()` do?**  
It repeatedly runs a function after a fixed time interval.

**6. Why did you use `Math.random()`?**  
To generate random positions for the target.

**7. What is localStorage?**  
It lets a website save small amounts of data in the browser.

**8. How does the score increase?**  
The click event increases the score variable by 1.

**9. How does the game know when it is over?**  
The timer decreases every second. When it reaches zero, the game ends.

**10. How did you make it responsive?**  
CSS media queries change the layout and sizes for smaller screens.

## 📌 Future Improvements

- Difficulty levels
- Online leaderboard
- More game modes
- More sound effects
- Additional visual themes

## 📄 Submission Notes

This project intentionally uses simple, readable code so the core implementation can be explained clearly during a student evaluation or viva.
