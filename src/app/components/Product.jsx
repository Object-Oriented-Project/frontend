class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Beverage class
class Beverage extends Product {
  constructor(name, price, sweet, type) {
    super(name, price);
    this.sweet = sweet;
    this.type = type;
  }
}

// Food class
class Food extends Product {
  constructor(name, price, spicy) {
    super(name, price);
    this.spicy = spicy;
  }
}

// Bakery class
class Bakery extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
