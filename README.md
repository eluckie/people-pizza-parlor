# Pizza Parlor

#### By E. Luckie ☀️

#### This webpage acts as a faux pizza parlor where users are able to select a pizza size and customize their toppings as desired, as well as see the price for their selections.

## Technologies Used

* HTML
* CSS
* JavaScript
* Markdown
* Git

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

[Click here](https://eluckie.github.io/pizza-parlor/) to view the live version of this Pizza Parlor webpage.

## Test-Driven Development Tests
Describe Pizza();

Test 1: "It should return a pizza object with three properties for size, sauce choice, and toppings"
Code: const myPizza = new Pizza("small", "light", ["pepperoni", "ham"]);
Expected Output:
Pizza { size: "small", sauce: "light", toppings: ["pepperoni", "ham"] }

Describe Pizza.prototype.addToppings();

Test 1: "It should add the specified topping to pizza object in the correct property"
Code: 
let myPizza = new Pizza();
myPizza.addToppings("pepperoni");
Expected Output: 
Pizza { size: undefined, sauce: undefined, toppings: "pepperoni" }

Test 2: "It should add multiple specified toppings to pizza object in the correct property"
Code:
let myPizza = new Pizza();
myPizza.addToppings("pepperoni", "ham");
Expected Output:
Pizza { size: undefined, sauce: undefined, toppings: ["pepperoni", "ham"] }

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of this directory
* Open pizza-parlor/index.html in your web browser

## Known Bugs

* _Any known issues_
* _should go here_

## License

MIT License

Copyright (c) 2023 Elizabeth Luckie

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
