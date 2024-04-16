import {Product} from './Product';

export class Bakery extends Product {
  #keto : boolean
  
  constructor(pid: number, name: string, price: number, size: string,quantity: number, keto: boolean) {
      super(pid, name, price, size, quantity);
      this.#keto = keto;
  }

  isKeto() {
    return this.#keto
  } 
}