Want people to select any topping and push it into a pizza construct, up to 3.

need to build a pizza construct, a topping construct, inputs for size and toppings, and an output for price.

build a pizza

build a topping

push a topping into it

push many toppings into it

Easiest would be drop down or radials

Describe: function Pizza();

test: "should create a pizza object with an empty spot for a constructor"
code: let pizza1 = new Pizza();
result: pizza1.details = {};


Describe: function PizzaParts(topping1, topping2, topping3, size)

test: "should create an object containing the details of a pizza in key object pairs.
code: let yourPizza = new PizzaParts("Red Onion", "Peppers", "Black Olives", "Large")
result: yourPizza {
  topping1 = "Red Onion"
  topping2 = "Peppers"
  topping3 = "Black Olives"
  size = "Large"
}


Describe: addPizzaParts(PizzaParts)

test: "should push the PizzaParts object into the Pizza object"
code: Pizza.addPizzaParts(PizzaParts)
result: Pizza.details[PizzaParts] = {topping1: value, topping2: value, topping3: value, size: value}


Describe:
