function cloneIngredients() {
  return ingredientTemplates.map(item => ({ ...item, collected: false }));
}

function isWalkable(x, y) {
  return maze[y] && maze[y][x] === 0;
}

function tryMove(dx, dy) {
  if (gameState !== GameState.PLAYING) return;

  const nx = player.x + dx;
  const ny = player.y + dy;

  if (!isWalkable(nx, ny)) return;

  player.x = nx;
  player.y = ny;

  checkIngredientPickup();
  checkFinalGoal();
  draw();
}

function checkIngredientPickup() {
  const item = ingredients.find(i => !i.collected && i.x === player.x && i.y === player.y);
  if (!item) return;

  item.collected = true;
  collected.push(item);
  updateInventoryUI();

  chefSay(`¡Encontramos ${item.label}!`, portraits.chef_happy);

  if (ingredients.every(i => i.collected)) {
    goalUnlocked = true;
    chefSay("¡Ya tenemos todos los ingredientes! Vamos con la cumpleañera.", portraits.chef_proud);
    girlSay("¡Qué emoción! Ya casi llega mi pastel 🎂", portraits.birthday_smile);
  }
}

function checkFinalGoal() {
  if (!goalUnlocked) return;
  if (player.x !== birthdayGirl.x || player.y !== birthdayGirl.y) return;

  gameState = GameState.ENDING;
  chefSay("¡Lo logramos! Trajimos el pastel con todos los ingredientes.", portraits.chef_proud);
  girlSay("¡Qué bonito! Muchas gracias por este pastel. ¡Me encanta!", portraits.birthday_smile);

  showEnding();
}

function resetGame() {
  player = { x: 1, y: 1 };
  ingredients = cloneIngredients();
  collected = [];
  goalUnlocked = false;
  gameState = GameState.PLAYING;

  endingScreen.style.display = "none";
  updateInventoryUI();

  chefSay("Necesitamos encontrar todos los ingredientes para preparar un pastel especial.", portraits.chef_normal);
  girlSay("Aquí estaré esperando mi pastel.", portraits.birthday_smile);

  draw();
}