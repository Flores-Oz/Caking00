function chefSay(text, portrait = portraits.chef_normal) {
  chefSprite.src = portrait;
  chefText.textContent = text;
}

function girlSay(text, portrait = portraits.birthday_smile) {
  girlSprite.src = portrait;
  girlText.textContent = text;
}

function updateInventoryUI() {
  if (collected.length === 0) {
    inventoryText.textContent = "Ninguno";
    return;
  }

  inventoryText.textContent = collected.map(i => i.label).join(", ");
}

function showEnding() {
  endingScreen.style.display = "flex";
}