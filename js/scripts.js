function Pizza() {
  this.size = undefined;
  this.sizePrice = 0;
  this.sauce = undefined;
  this.toppings = [];
}

Pizza.prototype.chooseSize = function(sizeChoice) {
  this.size = sizeChoice;
  if (this.size === "small") {
    this.sizePrice = "$10";
  } else if (this.size === "medium") {
    this.sizePrice = "$15";
  } else if (this.size === "large") {
    this.sizePrice = "$20";
  } else if (this.size === "family") {
    this.sizePrice = "$25";
  }
}

Pizza.prototype.addSauce = function(sauceChoice) {
  this.sauce = sauceChoice;
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
}
