function showDialog(dialogs, onFinish = null) {
  dialogQueue = dialogs.map(d => ({ ...d }));
  dialogQueue.onFinish = onFinish;
  gameState = GameState.DIALOG;
  nextDialog();
}

function nextDialog() {
  const next = dialogQueue.shift();

  if (!next) {
    dialogBox.style.display = "none";

    const finish = dialogQueue.onFinish;
    dialogQueue = [];

    if (finish) {
      finish();
    } else if (goalUnlocked) {
      gameState = GameState.FINAL_READY;
    } else {
      gameState = GameState.PLAYING;
    }

    return;
  }

  dialogName.textContent = next.name;
  dialogText.textContent = next.text;
  dialogPortrait.src = next.img;

  dialogPortrait.onerror = () => {
    dialogPortrait.src =
      "data:image/svg+xml;utf8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140">
          <rect width="100%" height="100%" fill="#444"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="16">
            PNG
          </text>
        </svg>
      `);
  };

  dialogBox.style.display = "flex";
}