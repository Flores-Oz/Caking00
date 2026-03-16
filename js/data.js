const TILE = 64;
const ROWS = 10;
const COLS = 10;

const GameState = {
  PLAYING: "PLAYING",
  ENDING: "ENDING"
};

const maze = [
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,1,0,0,0,0,1],
  [1,0,1,0,1,0,1,1,0,1],
  [1,0,1,0,0,0,0,1,0,1],
  [1,0,1,1,1,1,0,1,0,1],
  [1,0,0,0,0,1,0,0,0,1],
  [1,1,1,1,0,1,1,1,0,1],
  [1,0,0,1,0,0,0,1,0,1],
  [1,0,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1]
];

const birthdayGirl = { x: 8, y: 8 };

const ingredientTemplates = [
  { id: "harina", label: "Harina", x: 3, y: 1, color: "#f5e6b3", symbol: "H" },
  { id: "huevo", label: "Huevo", x: 1, y: 5, color: "#fff1a8", symbol: "E" },
  { id: "leche", label: "Leche", x: 4, y: 7, color: "#cdefff", symbol: "L" },
  { id: "azucar", label: "Azúcar", x: 6, y: 3, color: "#ffd1ff", symbol: "A" },
  { id: "fresa", label: "Fresa", x: 8, y: 5, color: "#ff7a98", symbol: "F" }
];

const portraits = {
  chef_normal: "assets/chef_normal.png",
  chef_happy: "assets/chef_happy.png",
  chef_excited: "assets/chef_excited.png",
  chef_proud: "assets/chef_proud.png",
  birthday_smile: "assets/cumpleanera.png"
};