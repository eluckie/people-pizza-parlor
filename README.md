# People Pizza Parlor

#### By E. Luckie ☀️

#### This webpage acts as a faux pizza parlor where users are able to select a pizza size and customize their toppings as desired, then see the price.

## Technologies Used

* HTML
* CSS
* JavaScript
* Markdown
* Git

## Description

This zombie-themed webpage is intended to demonstrate proper utilization of constructors and prototypes with JavaScript. Users are able to complete the form to customize their pizza by choosing a size, sauce amount, and desired toppings. When they click the "calculate total" button, their full selections are displayed back to them as well as the total cost of their pizza. They are then able to either create another pizza and submit again, or click the "start over" button to clear their screen and form.

[Click here](https://eluckie.github.io/people-pizza-parlor/) to view the live version of this People Pizza Parlor webpage.

## Test-Driven Development Tests
Describe Pizza();

Test 1: "It should return a pizza object with three properties for size, sauce choice, and toppings"
Code: const myPizza = new Pizza("small", "light", ["pepperoni", "ham"]);
Expected Output:
Pizza { size: "small", sauce: "light", toppings: ["pepperoni", "ham"] }

Describe Pizza.prototype.chooseSize();

Test 1: "It should add the specified size choice to pizza object in the correct property"
Code:
let myPizza = new Pizza();
myPizza.sizeChoice("medium");
myPizza;
Expected Output:
Pizza { size: "medium", sauce: undefined, toppings: undefined }

Test 2: "It should add the price for the specified size to pizza object in the correct property"
Code:
let myPizza = new Pizza();
myPizza.sizeChoice("medium");
myPizza;
Expected Output:
Pizza { size: "medium", size price: 15, sauce: undefined, toppings: undefined }

Describe Pizza.prototype.addSauce();

Test 1: "It should add the specified sauce choice to pizza object in the correct property"
Code:
let myPizza = new Pizza();
myPizza.addSauce("light");
myPizza;
Expected Output:
Pizza { size: undefined, sauce: "light", toppings: undefined }

Describe Pizza.prototype.addToppings();

Test 1: "It should add the specified topping to pizza object in the correct property"
Code: 
let myPizza = new Pizza();
myPizza.addToppings("pepperoni");
myPizza;
Expected Output: 
Pizza { size: undefined, sauce: undefined, toppings: "pepperoni" }

Test 2: "It should add multiple specified toppings to pizza object in the correct property"
Code:
let myPizza = new Pizza();
myPizza.addToppings("pepperoni");
myPizza.addToppings("ham");
myPizza;
Expected Output:
Pizza { size: undefined, sauce: undefined, toppings: ["pepperoni", "ham"] }

Test 3: "It should update the toppings cost property by 2 if there is one topping on the pizza"
Code:
let myPizza = new Pizza();
myPizza.addToppings("pepperoni");
myPizza;
Expected Output:
Pizza { size: undefined, sizePrice: 0, sauce: undefined, toppings: ["pepperoni"], toppingsPrice: 2 }

Describe Pizza.prototype.calculateTotalCost()

Test 1: "It should add the size cost to the toppings cost and return the total cost of the pizza object"
Code:
let myPizza = new Pizza();
myPizza.chooseSize("medium");
myPizza.addToppings("pepperoni");
myPizza.calculateTotalCost();
Expeected Output: 17

Describe ShoppingCart()

Test 1: "It should return an empty shopping cart object"
Code: const myCart = new ShoppingCart();
Expected Output:
ShoppingCart { }

Describe ShoppingCart.prototype.addToCart()

Test 1: "It should add the specified pizza object to the shopping cart object"
Code:
const myPizza = new Pizza();
const myCart = new ShoppingCart();
myCart.addToCart(myPizza);
Expected Output:
ShoppingCart { pizzas: { size: myPizza } }

Describe ShoppingCart.prototype.assignId()

Test 1: "It should assign a unique ID to each pizza object that is added to the shopping cart object"
Code:
const myPizza = new Pizza();
const myCart = new ShoppingCart();
myCart.addToCart(myPizza);
Expected Output:
ShoppingCart { pizzas: { ID: myPizza } }

Describe ShoppingCart.prototype.deletePizza()

Test 1: "It should delete the specified pizza object from the shopping cart object"
Code:
const myPizza = new Pizza();
const myCart = new ShoppingCart();
myCart.addToCart(myPizza);
myCart.deletePizza(1);
Expected Output:
ShoppingCart { pizzas: {} }


## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of this directory
* Open people-pizza-parlor-cart/index.html in your web browser

## Known Bugs

* When window is resized too small, it cuts off part of pizza size photos that show the base price
* If you don't add any toppings, it will display the correct price for the single pizza and add it to the cart, but it does not update the cart's grand total or the pizza's total itself.

## License

MIT License

Copyright (c) 2023 Elizabeth Luckie

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
