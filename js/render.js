function drawMaze() {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (maze[y][x] === 1) {
        ctx.fillStyle = "#5b2434";
        ctx.fillRect(x * TILE, y * TILE, TILE, TILE);

        ctx.strokeStyle = "#7b3b4d";
        ctx.lineWidth = 2;
        ctx.strokeRect(x * TILE, y * TILE, TILE, TILE);
      } else {
        ctx.fillStyle = "#301634";
        ctx.fillRect(x * TILE, y * TILE, TILE, TILE);

        ctx.strokeStyle = "#432148";
        ctx.lineWidth = 1;
        ctx.strokeRect(x * TILE, y * TILE, TILE, TILE);
      }
    }
  }
}

function drawIngredients() {
  for (const item of ingredients) {
    if (item.collected) continue;

    const px = item.x * TILE + TILE / 2;
    const py = item.y * TILE + TILE / 2;

    ctx.fillStyle = item.color;
    ctx.beginPath();
    ctx.arc(px, py, 18, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#1b1020";
    ctx.font = "bold 18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(item.symbol, px, py);
  }
}

function drawBirthdayGirl() {
  const px = birthdayGirl.x * TILE + TILE / 2;
  const py = birthdayGirl.y * TILE + TILE / 2;

  ctx.fillStyle = goalUnlocked ? "#ff8fd1" : "#6a4a6c";
  ctx.beginPath();
  ctx.arc(px, py, 22, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.font = "bold 12px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("🎉", px, py + 1);

  if (goalUnlocked) {
    ctx.fillStyle = "#fff";
    ctx.font = "12px Arial";
    ctx.fillText("Cumpleañera", px, py - 30);
  }
}

function drawPlayer() {
  const px = player.x * TILE + TILE / 2;
  const py = player.y * TILE + TILE / 2;

  ctx.fillStyle = "#6cf7c2";
  ctx.beginPath();
  ctx.arc(px, py, 20, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#0d2620";
  ctx.font = "bold 12px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("P", px, py);
}

function drawGoalHint() {
  if (!goalUnlocked) return;

  ctx.fillStyle = "#fff";
  ctx.font = "16px Arial";
  ctx.textAlign = "left";
  ctx.fillText("Ve con la cumpleañera 🎂", 12, 24);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMaze();
  drawIngredients();
  drawBirthdayGirl();
  drawPlayer();
  drawGoalHint();
}