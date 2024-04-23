import { Product } from "./product/Product";
import { Food } from "./product/Food";
import { Beverage } from "./product/Beverage";
import { Bakery } from "./product/Bakery";
import generatePayload from "promptpay-qr";

export default class Order {
  #uid: string;
  #oid: string;
  #products: Product[];
  #totalPrice: number;

  constructor(uid: string) {
    this.#uid = uid;
    this.#oid = (
      Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
    ).toString();
    this.#products = [];
    this.#totalPrice = 0;
  }

  addProduct(product: Product) {
    this.#products.push(product);
  }

  removeProduct(product: Product) {
    this.#products = this.#products.filter(
      (p) => !this.#productsAreEqual(p, product),
    );
  }
  #productsAreEqual(product1: Product, product2: Product) {
    if (
      product1.getId() === product2.getId() &&
      product1.getName() === product2.getName() &&
      product1.getSize() === product2.getSize()
    ) {
      if (product1 instanceof Bakery && product2 instanceof Bakery) {
        return product1.isKeto() === product2.isKeto();
      }
      if (product1 instanceof Beverage && product2 instanceof Beverage) {
        return product1.getSweet() === product2.getSweet();
      }

      if (product1 instanceof Food && product2 instanceof Food) {
        return product1.getSpicy() === product2.getSpicy();
      }
      return true;
    }
    return false;
  }
  updateProduct(product: Product, newQuantity: number) {
    const index = this.#products.findIndex((p) =>
      this.#productsAreEqual(p, product),
    );
    if (index !== -1) {
      this.#products[index].setQuantity(newQuantity);
      this.#totalPrice = this.computeTotalPrice();
    }
  }

  computeTotalPrice() {
    let totalPrice = 0;
    for (const product of this.#products) {
      totalPrice += product.getPrice() * product.getQuantity();
    }
    this.#totalPrice = totalPrice;
    return totalPrice;
  }

  getProducts() {
    return this.#products.map((product) => {
      const attributes = {
        id: product.getId(),
        name: product.getName(),
        price: product.getPrice(),
        size: product.getSize(),
        quantity: product.getQuantity(),
      };
      if (product instanceof Food) {
        attributes.spicy = product.getSpicy();
      } else if (product instanceof Beverage) {
        attributes.sweet = product.getSweet();
      } else if (product instanceof Bakery) {
        attributes.keto = product.isKeto();
      }

      return { product, attributes };
    });
  }

  getSize() {
    return this.#products.length;
  }
  pay() {
      const qrPayload = generatePayload("1-1008-01474-58-0", {
        amount: this.#totalPrice,
      });
      return qrPayload;
    
  }
  getUID() {
    return this.#uid;
  }
  getOID() {
    return this.#oid;
  }
}
