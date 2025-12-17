# 🎮 Tic Tac Toe Game

A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. A simple yet engaging web-based implementation of the timeless strategy game.

---

## 🎯 Overview

This project is a fully functional Tic Tac Toe game with a clean interface and smooth user interactions. Players can compete against each other in this turn-based strategy game where the first player to align three marks wins!

**Play Online:** [Tic-Tac-Toe](https://moshiour45.github.io/Tic-Tac-Toe/)

---

## ✨ Features

- ✅ **Two-Player Gameplay** - X and O players take turns
- ✅ **Win Detection** - Automatically detects winning combinations
- ✅ **Clean Interface** - Easy-to-use button-based game board
- ✅ **Reset Functionality** - Play multiple rounds without refreshing
- ✅ **Responsive Design** - Works on desktop and mobile devices
- ✅ **Winner Announcement** - Clear notification when a player wins
- ✅ **Game Controls** - Reset and New Game buttons for quick replays

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Moshiour45/Tic-Tac-Toe.git
```

### 2. Open the Game
Simply open `index.html` in your web browser:
```bash
open index.html
```

Or double-click `index.html` to launch it.

### 3. Play!
- Click any empty box to place your mark
- Player O goes first, then players alternate
- Get three in a row (horizontal, vertical, or diagonal) to win
- Click **Reset** or **New Game** to play again

---

## 📁 Project Structure

```
tic-tac-toe/
├── index.html           # Main HTML file with game structure
├── style.css           # Styling and layout
├── script.js           # Game logic and interactivity
└── README.md           # This file
```

### File Descriptions

**index.html**
- Game board markup with 9 interactive buttons
- Control buttons (Reset/New Game)
- Winner announcement container

**style.css**
- Teal/green color scheme (#548687)
- Yellow game boxes (#ffffc7)
- Responsive grid layout
- Button and container styling
- Message display styling

**script.js**
- Game state management
- Win pattern checking (8 possible combinations)
- Event listeners for player moves
- Game reset and state management functions

---

## 🎮 How to Play

### Game Rules
1. **Objective:** Get three marks in a row (horizontal, vertical, or diagonal)
2. **Players:** Two players alternate turns
3. **Winning:** First player to complete three in a row wins
4. **Board:** 3×3 grid with 9 playable squares
5. **Turns:** Player O starts, then X alternates

### Win Patterns (8 Possible Combinations)
```
0 1 2      0 3 6      0 4 8
3 4 5  ,   1 4 7  ,   2 5 8  ,
6 7 8      2 4 6      3 4 5      6 7 8
```

### Controls
- **Click any box** - Place your mark
- **Reset Button** - Clear current game
- **New Game Button** - Start a fresh game

---

## 🎨 Design & Colors

| Element | Color | Hex Code |
|---------|-------|----------|
| Background | Teal | `#548687` |
| Game Box | Yellow | `#ffffc7` |
| Text (X/O) | Dark Red | `#b0413e` |
| Buttons | Dark Black | `#191913` |
| Button Text | White | `#fff` |
| Message Text | Yellow | `#ffffc7` |

---

## 💻 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Styling and responsive layout
- **JavaScript (ES6)** - Game logic and DOM manipulation

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## 🔧 Code Overview

### Key JavaScript Functions

```javascript
checkWinner()     // Checks for winning combinations
showWinner()      // Displays winner message
reset()           // Resets game state
disableBoxes()    // Prevents further moves after game ends
enableBoxes()     // Enables boxes for new game
```

### Win Pattern Array
```javascript
const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];
```

---

## 🎯 Gameplay Logic

1. **Turn Management** - `turnO` boolean tracks current player
2. **Move Validation** - Only empty boxes can be clicked
3. **Winner Detection** - Compares each box against all 8 win patterns
4. **Game End** - All boxes disabled after winner found
5. **Reset** - Clears board and resets game state

---

## 📋 Future Enhancements

- 🤖 AI opponent with difficulty levels
- 🏆 Score tracking and leaderboard
- 🎵 Sound effects and animations
- 🌙 Dark mode toggle
- 👥 Multiplayer online support
- ⏱️ Time-based challenges
- 📊 Game statistics and history

---

## 🐛 Known Issues

- No current known issues. Please report bugs by opening an issue on GitHub!

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---




## 👨‍💻 Author

**Your Name**
- GitHub: [@Moshiour45](https://github.com/Moshiour45)
---

## 🙏 Acknowledgments

- Classic Tic Tac Toe game concept
- Inspired by timeless strategy games
- Built as a learning project

---

## 📞 Support

If you have any questions or issues, please:
1. Check the [Issues](https://github.com/Moshiour45/tic-tac-toe/issues) page
2. Create a new issue with detailed information
3. Contact via email or social media

---

## 🎉 Have Fun!

Enjoy playing Tic Tac Toe! Challenge your friends and see who can master the game. 🏆

**Last Updated:** December 2025
