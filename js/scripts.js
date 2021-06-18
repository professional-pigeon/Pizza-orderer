// business logic

// Pizza logic

function Pizza() {
  this.details = {};
  this.price = "";
}

function PizzaParts(topping1, topping2, topping3, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size;
}

Pizza.prototype.addPizzaParts = function(PizzaParts) {
  this.details[PizzaParts.size] = PizzaParts;
}

function priceCalculator(topping1, topping2, topping3, size) {
  if (topping1 != "none") {
    price = price + 1;
  } else {}

  if (topping2 != "none") {
    price = price + 1;
  } else {}

  if (topping3 != "none") {
    price = price + 1;
  } else {}

  if (size === "Small") {
    price = price + 8;
  } else if (size === "Medium") {
    price = price + 10;
  } else if (size === "Large") {
    price = price + 12;
  } else {}
}

// pizza1.toppings[0].topping1
// pizza1.toppings[0].topping2
// pizza1.toppings[0].topping3
// pizza1.toppings[0].size
// pizza1.toppings.push(yourPizza) (this works)

// // pizza1.details["Red Onion"].topping1 or topping2 etc...
// // or pizza1.details[key].topping1


let price = 0;

$(document).ready(function() {
  $("form#pizzaGeneratorUI").submit(function(event) {
    event.preventDefault();
    let topping1 = $("input:radio[name=pizzaTopping]:checked").val();
    let topping2 = $("input:radio[name=pizzaTopping2]:checked").val();
    let topping3 = $("input:radio[name=pizzaTopping3]:checked").val();
    let size = $("input:radio[name=pizzaSize]:checked").val();
    let thisPizza = new PizzaParts(topping1, topping2, topping3, size);
    console.log(thisPizza.size);
    let pizza1 = new Pizza();
    pizza1.addPizzaParts(thisPizza);
    priceCalculator(topping1, topping2, topping3, size);
    pizza1.price = price;

    $("#customerSize").prepend(pizza1.size)
    $("")

  });
});