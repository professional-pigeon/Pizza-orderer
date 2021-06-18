// business logic

// Pizza logic

function Pizza() {
  this.toppings = {};
}

let Pizza1 = new Pizza();

function PizzaParts(topping1, topping2, topping3, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size;
}

let yourPizza = new PizzaParts("Red Onion", "Peppers", "Sausage", "Large")

