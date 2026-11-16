<div align="center">

# 🧮 Calculator

A simple, clean calculator built with **HTML, CSS and vanilla JavaScript**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Status](https://img.shields.io/badge/status-completed-brightgreen?style=for-the-badge)

<!-- Add a screenshot or GIF of your calculator here:
<img src="./screenshot.png" alt="Calculator preview" width="320" />
-->

<!-- If you enable GitHub Pages (Settings > Pages), add the live demo link:
[🔗 **Live demo**](https://sousini.github.io/Calculator/)
-->

</div>

---

## ✨ Features

- ➕ ➖ ✖️ ➗ Basic operations: **add, subtract, multiply and divide**
- 🔗 Chains operations one pair at a time (`12 + 7 - 1` → evaluates `12 + 7` before continuing)
- 🔢 Rounds long decimal results so they never overflow the display
- 🧹 **Clear** button that resets everything
- 🛡️ Safe handling of edge cases:
  - Division by zero shows a message instead of crashing
  - Pressing `=` before entering all the numbers does nothing harmful
  - Pressing several operators in a row uses only the last one
  - Typing a digit after a result starts a new calculation

### ⭐ Extra features

<!-- Tick the ones you implemented: [x] done, [ ] not done -->

- [ ] Decimal numbers (`.` button, only one decimal point per number)
- [ ] Backspace button
- [ ] Keyboard support

---

## 📁 Project structure

```
Calculator/
├── index.html    # Calculator layout (display and buttons)
├── styles.css    # Styling
├── script.js     # Logic: operate(), display and button handlers
└── README.md
```

---

## 🚀 How to run

No installation or build step needed.

```bash
# Clone the repository
git clone https://github.com/Sousini/Calculator.git
cd Calculator

# Open index.html in your browser
```

Or just double-click `index.html`.

---

## 🧠 How it works

The calculator keeps track of three values: the **first number**, the **operator** and the **second number**. When there is a complete operation, the `operate()` function receives the operator and both numbers and calls the matching function (`add`, `subtract`, `multiply` or `divide`). The result is then shown on the display and reused as the first number of the next operation.

---

## 🛠️ Built with

- **HTML5**: structure
- **CSS3**: layout and styling
- **JavaScript (ES6)**: logic and interactivity

---

## 🎯 What I learned

- Manipulating the DOM and handling click events
- Managing state (first number, operator, second number)
- Handling edge cases and bugs in user input
- Organizing code into small, reusable functions

---

## 👤 Author

**João Sousa**

[![GitHub](https://img.shields.io/badge/GitHub-Sousini-181717?style=for-the-badge&logo=github)](https://github.com/Sousini)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jo%C3%A3o-sousa-63ab4537a/)
