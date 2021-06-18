// business logic

// Pizza logic

function Pizza() {
  this.details = {};
}

let pizza1 = new Pizza();

function PizzaParts(topping1, topping2, topping3, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size;
}

let yourPizza = new PizzaParts("Red Onion", "Peppers", "Sausage", "Large")

Pizza.prototype.addPizzaParts = function(PizzaParts) {
  this.details[PizzaParts.topping1] = PizzaParts;
}

pizza1.toppings[0].topping1
pizza1.toppings[0].topping2
pizza1.toppings[0].topping3
pizza1.toppings[0].size
pizza1.toppings.push(yourPizza) (this works)

AddressBook.prototype.addContact = function(contact) {
  this.contacts[contact.firstName] = contact;
};

pizza1.details["Red Onion"].topping1
or pizza1.details[key].topping1