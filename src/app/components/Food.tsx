// Food class
import {Product} from "./Product";

export class Food extends Product {

  #spicy : string;

  constructor(pid: number, name: string, price: number, size: string, quantity:number, spicy: string) {
    super(pid, name, price, size,quantity);
    this.#spicy = spicy;
  }

  getSpicy() {
    return this.#spicy
  }

  toString() {
    return `size : ${this.getSize()}\nspicy level :  ${this.getSpicy()}`;
  }
}