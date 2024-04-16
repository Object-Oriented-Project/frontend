// Beverage class
import { Product } from "./Product";

export class Beverage extends Product {
  #type: string;
  #sweet: number;

  constructor(pid: number, name: string, price: number, size: string, quantity: number, type: string, sweet: number) {
      super(pid, name, price, size,quantity);
      this.#type = type;
      this.#sweet = sweet;
  }
  
  getType() {
    return this.#type
  }

  getSweet() {
    return this.#sweet
  }
}