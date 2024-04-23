export default class Customer {
  #name: string;
  #uid: string;

  constructor(name: string) {
    this.#name = name;
    this.#uid = (
      Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
    ).toString();
  }
  
  getName(): string {
    return this.#name;
  }

  getUid(): string {
    return this.#uid;
  }
}
