const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const inventoryText = document.getElementById("inventory");

const chefSprite = document.getElementById("chefSprite");
const chefText = document.getElementById("chefText");

const girlSprite = document.getElementById("girlSprite");
const girlText = document.getElementById("girlText");

const endingScreen = document.getElementById("endingScreen");
const restartBtn = document.getElementById("restartBtn");

let gameState = GameState.PLAYING;
let player = { x: 1, y: 1 };
let ingredients = [];
let collected = [];
let goalUnlocked = false;

window.addEventListener("keydown", (e) => {
  if (gameState === GameState.ENDING) return;

  switch (e.key.toLowerCase()) {
    case "arrowup":
    case "w":
      e.preventDefault();
      tryMove(0, -1);
      break;
    case "arrowdown":
    case "s":
      e.preventDefault();
      tryMove(0, 1);
      break;
    case "arrowleft":
    case "a":
      e.preventDefault();
      tryMove(-1, 0);
      break;
    case "arrowright":
    case "d":
      e.preventDefault();
      tryMove(1, 0);
      break;
  }
});

restartBtn.addEventListener("click", resetGame);

resetGame();