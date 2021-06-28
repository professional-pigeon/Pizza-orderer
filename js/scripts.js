// business logic

function Pizza(topping1, topping2, topping3, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.priceCalculator = function() {
  if (this.topping1 != "none") {
    this.price = this.price + 1;
  } else {}

  if (this.topping2 != "none") {
    this.price = this.price + 1;
  } else {}

  if (this.topping3 != "none") {
    this.price = this.price + 1;
  } else {}

  if (this.size === "Small") {
    this.price = this.price + 8;
  } else if (this.size === "Medium") {
    this.price = this.price + 10;
  } else if (this.size === "Large") {
    this.price = this.price + 12;
  } else {}

}

$(document).ready(function() {
  $("form#pizzaGeneratorUI").submit(function(event) {
    event.preventDefault();
    let topping1 = $("input:radio[name=pizzaTopping]:checked").val();
    let topping2 = $("input:radio[name=pizzaTopping2]:checked").val();
    let topping3 = $("input:radio[name=pizzaTopping3]:checked").val();
    let size = $("input:radio[name=pizzaSize]:checked").val();
    let pizza1 = new Pizza(topping1, topping2, topping3, size);
    pizza1.priceCalculator();
    $("#customerSize").html("One " + pizza1.size + " Pizza with ")
    $("#customerTopping").html(pizza1.topping1 + ", " + pizza1.topping2 + ", " + pizza1.topping3 + ". ")
    $("#orderTotal").html("Your total is $" + pizza1.price + "." + "<br>" + "Please pick up at the 2020 N Halsey location.")

  });
});