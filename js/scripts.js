function ShoppingCart() {
  this.pizzas = {};
  this.grandTotal = 0;
  this.currentId = 0;
}

ShoppingCart.prototype.addToCart = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
  const pizzaPrice = pizza.pizzaTotal;
  this.grandTotal += pizzaPrice;
};

ShoppingCart.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

ShoppingCart.prototype.deletePizza = function(id) {
  if (this.pizzas[id] === undefined) {
    return false;
  }
  delete this.pizzas[id];
  return true;
}

function Pizza() {
  this.size = undefined;
  this.sizePrice = 0;
  this.sauce = undefined;
  this.toppings = [];
  this.toppingsCost = 0;
  this.pizzaTotal = 0;
}

Pizza.prototype.chooseSize = function(sizeChoice) {
  this.size = sizeChoice;
  if (this.size === "Child") {
    this.sizePrice = 10;
  } else if (this.size === "Teenager") {
    this.sizePrice = 15;
  } else if (this.size === "Adult") {
    this.sizePrice = 20;
  } else if (this.size === "Grandparents") {
    this.sizePrice = 25;
  }
};

Pizza.prototype.addSauce = function(sauceChoice) {
  this.sauce = sauceChoice;
};

Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
  this.toppingsCost += 2;
};

Pizza.prototype.calculateTotalCost = function() {
  let total = this.sizePrice + this.toppingsCost;
  this.pizzaTotal = parseInt(total);
  return this.pizzaTotal;
};

const cart = new ShoppingCart();

function displayPizzaCost() {
  const pizza = new Pizza();
  const size = document.getElementById("size").value;
  const sauce = document.getElementById("blood").value;
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
  const displayTotal = document.createElement("h3");
  const yourSize = document.createElement("p");
  const yourSauce = document.createElement("p");
  const addToCartButton = document.getElementById("add-to-cart");
  const total = pizza.calculateTotalCost();

  yourSize.append("Size: " + pizza.size);
  yourSauce.append("Blood: " + pizza.sauce);
  yourToppings.prepend("Toppings: ");
  displayTotal.append("This pizza is $" + total);
  div.append(yourSize);
  div.append(yourSauce);
  div.append(yourToppings);
  div.append(displayTotal);
  div.removeAttribute("class");
  addToCartButton.removeAttribute("class");
}

// need to DRY once cart is functioning properly
function addPizzaToCart() {
  const pizza = new Pizza();
  const size = document.getElementById("size").value;
  const sauce = document.getElementById("blood").value;
  pizza.chooseSize(size);
  pizza.addSauce(sauce);

  const toppingSelections = document.querySelectorAll("input[name=topping-option]:checked");
  const toppingSelectionsArray = Array.from(toppingSelections);
  const yourToppings = document.createElement("p");
  toppingSelectionsArray.forEach(function(topping) {
    pizza.addToppings(topping);
    yourToppings.append(topping.value + ". ");
    const total = pizza.calculateTotalCost();
  });

  cart.addToCart(pizza);

  const cartTotal = cart.grandTotal;
  const shoppingCart = document.getElementById("shopping-cart");
  const grandTotalDisplay = document.createElement("p");
  shoppingCart.innerText = null;
  grandTotalDisplay.append("Your total is $" + cartTotal);
  shoppingCart.append(grandTotalDisplay);
  shoppingCart.removeAttribute("class");
  document.getElementById("customize-pizza").reset();
  document.getElementById("your-pizza").innerText = "";
  document.getElementById("your-pizza").setAttribute("class", "hidden");
  document.getElementById("add-to-cart").setAttribute("class", "hidden");
}

function resetSelections() {
  document.getElementById("customize-pizza").reset();
  document.getElementById("your-pizza").innerText = "";
  document.getElementById("your-pizza").setAttribute("class", "hidden");
  document.getElementById("add-to-cart").setAttribute("class", "hidden");
  document.getElementById("shopping-cart").setAttribute("class", "hidden");
}

window.addEventListener("load", function() {
document.getElementById("calculate-button").addEventListener("click", displayPizzaCost);
document.getElementById("reset-button").addEventListener("click", resetSelections);
document.getElementById("add-to-cart-button").addEventListener("click", addPizzaToCart);
});