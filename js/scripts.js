function Pizza(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings = topping;
}