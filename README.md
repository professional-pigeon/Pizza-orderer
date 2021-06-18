# Pizza Order interface

#### Pizza Order Interface

#### By Kyle Kay-Perez

#### Shortcuts
- [Technologies Used](#technologies-used)
- [Description](#description)
- [Setup/Installation Requirements](#setup/installation-requirements)
- [Known Bugs](#known-bugs)
- [Future Plans](#future-plans)
- [License](#license)
- [Contact Information](#contact-information)

## Technologies Used

* HTML
* CSS
* [Markdown](https://www.markdownguide.org/)
* [Javascript](https://www.javascript.com/)
* [jQuery](https://jquery.com/)
* [VS studio](https://code.visualstudio.com/)
* [Bootstrap](https://getbootstrap.com/) 

## Description

This is practice with constructors and prototype inheritance. Also creates custom methods for pizza service.

## Setup/Installation Requirements

* Clone this repository from github to your desktop: [Github link for this project](https://github.com/professional-pigeon/Pizza-orderer)
* navigate to the top level of the directory
* Open the file named "index.html" in your browser.

## Known Bugs

* No known bugs

## Future plans

* Would love to have photo's of toppings that you can click to add to order. Add ability to add multiple pizza before check out.

## Function Tests

Describe: function Pizza();

test: "should create a pizza object with an empty spot for a constructor"
code: let pizza1 = new Pizza();
result: pizza1.details = {};

test: "should create a pizza object with a spot for price in addition to empty spot for an object."
result: pizza1. {
  details = {};
  price = "":
}

Describe: function PizzaParts(topping1, topping2, topping3, size)

test: "should create an object containing the details of a pizza in key object pairs.
code: let yourPizza = new PizzaParts("Red Onion", "Peppers", "Black Olives", "Large")
result: yourPizza {
  topping1 = "Red Onion"
  topping2 = "Peppers"
  topping3 = "Black Olives"
  size = "Large"
}


Describe: Pizza.prototype.addPizzaParts()

test: "should push the PizzaParts object into the Pizza object"
code: Pizza.addPizzaParts(PizzaParts)
result: Pizza.details[PizzaParts] = {topping1: value, topping2: value, topping3: value, size: value}


Describe: priceCalculator()

test: "Should return a price of 1 if topping1 has a value not equal to "none""
code: let topping1 = "Mushroom"
      priceCalculator(topping1)
result: price = 1

test: "should return a price of 0 if topping1 a value equal to "none""
code: let topping1 = "none"
result: price = 0

test: "Should return a price of 1 if topping2 has a value not equal to "none", and topping1 is has a value equal to "none""
code: let topping1 = "none"
      let topping2 = "Red Onion"
      priceCalculator(topping1, topping2)
result: price = 1

test: "Should return a price of 0 if topping2 has a value equal to "none""
code: let topping1 = "none"
      let topping2 = "none"
      priceCalculator(topping1, topping2)
result: price = 0

test: "Should return a price of 1 if topping3 has a value not equal to "none"", and topping1 and topping2 are equal to "none""
code: let topping1 = "none"
      let topping2 = "none"
      let topping3 = "mushroom"
      priceCalculator(topping1, topping2, topping3)
result: price = 1

test: "Should return a price of 0 if topping1, topping2, and topping3 are equal to "none""
code: let topping1 = "none"
      let topping2 = "none"
      let topping3 = "none"
      priceCalculator(topping1, topping2, topping3)
result: price = 0

test: "should return a price of 8 if size is equal to "Small""
code: let size = "Small"
t




## License

MIT License

Copyright (c) Kyle Kay-Perez 2021

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact Information

Kyle.KayPerez@gmail.com


