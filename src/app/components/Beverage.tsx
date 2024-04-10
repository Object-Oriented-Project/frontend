// Beverage class
class Beverage extends Product {
    constructor(name, price, sweet,type) {
      super(name, price);
      this.sweet = sweet;
      this.type = type;
    }
  }