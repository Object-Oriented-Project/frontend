// Food class
import {Product} from "./Product";

export class Food extends Product {

  #spicy : number;

  constructor(pid: number, name: string, price: number, size: string, quantity:number, spicy: number) {
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