function Pizza(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
}

Pizza.prototype.addToppings = function(topping1, topping2) {
  let allToppings = [];
  allToppings.push(topping1);
  allToppings.push(topping2);
  this.toppings = allToppings;
}