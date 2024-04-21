// Beverage class
import { Product } from "./Product";

export class Beverage extends Product {
  #sweet: string;

  constructor(
    pid: number,
    name: string,
    price: number,
    size: string,
    quantity: number,
    sweet: string,
  ) {
    super(pid, name, price, size, quantity);
    this.#sweet = sweet;
  }

  getSweet() {
    return this.#sweet;
  }

  toString() {
    return `size : ${this.getSize()}\nsweet level :  ${this.getSweet()}`;
  }
}
