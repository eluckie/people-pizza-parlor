function Pizza() {
  this.size = undefined;
  this.sizePrice = 0;
  this.sauce = undefined;
  this.toppings = [];
  this.toppingsCost = 0;
}

Pizza.prototype.chooseSize = function(sizeChoice) {
  this.size = sizeChoice;
  if (this.size === "small") {
    this.sizePrice = 10;
  } else if (this.size === "medium") {
    this.sizePrice = 15;
  } else if (this.size === "large") {
    this.sizePrice = 20;
  } else if (this.size === "family") {
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
  toppingSelectionsArray.forEach(function(topping) {
    pizza.addToppings(topping);
    const yourToppings = document.getElementById("your-pizza-toppings");
    yourToppings.append(topping.value + ". ");
  });


  const div = document.getElementById("your-pizza");
  const p = document.createElement("p");
  const yourSize = document.getElementById("your-pizza-size");
  const yourSauce = document.getElementById("your-pizza-sauce");

  div.removeAttribute("class");
  div.append(p);
  yourSize.append("Size: " + pizza.size);
  yourSauce.append("Sauce: " + pizza.sauce);
  console.log(pizza);
}

window.addEventListener("load", function() {
document.querySelector("form#customize-pizza").addEventListener("submit", handleFormSubmission);
});