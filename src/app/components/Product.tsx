 export class Product {
    #pid: number;
    #name: string;
    #price: number;
    #size: string;
    #quantity: number;

    constructor(pid: number, name: string, price: number, size: string, quantity:number) {
      this.#pid = pid;
      this.#name = name;
      this.#price = price;
      this.#size = size;
      this.#quantity = quantity;
    }
    getPrice() {
      return this.#price;
    }
  
    getId() {
      return this.#pid;
    }
  
    getSize() {
      return this.#size;
    }
  
    getQuantity() {
      return this.#quantity;
    }
    getName(){
      return this.#name;
    }
    increaseQuantity() {
      this.#quantity++;
    }
    decreseQuantity() {
      this.#quantity--;
    }
    setQuantity(newQuantity: number) {
      this.#quantity = newQuantity;
    }
    getTotalPrice() {
      return this.#price * this.#quantity;
    
    }
    
  }
  
  
  
