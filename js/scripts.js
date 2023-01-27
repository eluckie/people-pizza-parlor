function Pizza() {
  this.size = undefined;
  this.sizePrice = 0;
  this.sauce = undefined;
  this.toppings = [];
  this.toppingsCost = 0;
}

Pizza.prototype.chooseSize = function(sizeChoice) {
  this.size = sizeChoice;
  if (this.size === "Small") {
    this.sizePrice = 10;
  } else if (this.size === "Medium") {
    this.sizePrice = 15;
  } else if (this.size === "Large") {
    this.sizePrice = 20;
  } else if (this.size === "Family") {
    this.sizePrice = 25;
  }
}

Pizza.prototype.addSauce = function(sauceChoice) {
  this.sauce = sauceChoice;
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
  this.toppingsCost += 2;
}

Pizza.prototype.calculateTotalCost = function() {
  let total = this.sizePrice + this.toppingsCost
  return total;
}


// ui logic

function handleFormSubmission(event) {
  event.preventDefault();
  const pizza = new Pizza();
  const size = document.getElementById("size").value;
  const sauce = document.getElementById("sauce").value;
  pizza.chooseSize(size);
  pizza.addSauce(sauce);

  const toppingSelections = document.querySelectorAll("input[name=topping-option]:checked");
  const toppingSelectionsArray = Array.from(toppingSelections);
  const yourToppings = document.createElement("p");
  toppingSelectionsArray.forEach(function(topping) {
    pizza.addToppings(topping);
    yourToppings.append(topping.value + ". ");
  });

  const div = document.getElementById("your-pizza");
  const displayTotal = document.createElement("p");
  const yourSize = document.createElement("p");
  const yourSauce = document.createElement("p");
  const total = pizza.calculateTotalCost();

  yourSize.append("Size: " + pizza.size);
  yourSauce.append("Sauce: " + pizza.sauce);
  yourToppings.prepend("Toppings: ");
  displayTotal.append("Your total is $" + total);
  div.append(yourSize);
  div.append(yourSauce);
  div.append(yourToppings);
  div.append(displayTotal);
  div.removeAttribute("class");
  document.getElementById("customize-pizza").reset();
}

window.addEventListener("load", function() {
document.querySelector("form#customize-pizza").addEventListener("submit", handleFormSubmission);
});