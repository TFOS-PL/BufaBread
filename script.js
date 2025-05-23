let ingredients = {
  mąka: false,
  woda: false,
  drożdże: false
};

function addIngredient(type) {
  ingredients[type] = true;
  document.getElementById("status").textContent = `Dodano ${type}!`;
}

function bakeBread() {
  if (ingredients.mąka && ingredients.woda && ingredients.drożdże) {
    document.getElementById("status").textContent = "Udało się! Upiekłeś chleb! 🍞";
    ingredients = { mąka: false, woda: false, drożdże: false };
  } else {
    document.getElementById("status").textContent = "Brakuje składników!";
  }
}
