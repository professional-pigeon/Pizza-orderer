// business logic

// Pizza logic

function Pizza() {
  this.details = {};
  this.price = "";
}

let pizza1 = new Pizza();

function PizzaParts(topping1, topping2, topping3, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size;
}

let yourPizza = new PizzaParts("Red Onion", "Peppers", "Black Olives", "Large")

Pizza.prototype.addPizzaParts = function(PizzaParts) {
  this.details[PizzaParts] = PizzaParts;
}

function priceCalculator(PizzaParts) {
  let price = 0  
  if (PizzaParts.topping1 === "Red Onion") {
    price = price + 1
  } 
  console.log(price)
}

// pizza1.toppings[0].topping1
// pizza1.toppings[0].topping2
// pizza1.toppings[0].topping3
// pizza1.toppings[0].size
// pizza1.toppings.push(yourPizza) (this works)

// // pizza1.details["Red Onion"].topping1 or topping2 etc...
// // or pizza1.details[key].topping1

$(document).ready(function() {
  event.preventDefault
  let topping1 = val
  let topping2 = val
  let topping3 = val
  let size = val
  let yourPizza = new PizzaParts(topping1, topping2, topping3, size)
})