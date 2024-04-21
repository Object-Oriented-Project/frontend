import axios from "axios";
import Order from "./order";
import { Bakery } from "./product/Bakery";
import { Beverage } from "./product/Beverage";

export default class Receipt {
  #oid: string;
  #uid: string;
  #tableNo: string;
  #custName: string;
  // totalPrice : number;
  #status: string;
  #order: Order;

  constructor(
    oid: string,
    uid: string,
    tableNo: string,
    custName: string,
    status: string,
    order: Order,
  ) {
    this.#oid = oid;
    this.#uid = uid;
    this.#tableNo = tableNo; // ได้จากตอนเลือกโต๊ะ
    this.#custName = custName; // เอาจาก Obj cust ?
    // this.totalPrice = totalPrice;
    this.#status = status; // สถานะการทำอาหาร
    this.#order = order;
  }

  getReceiptData() {
    const orderItems = this.#order.getProducts().map(item => {
        const itemData = {
            menu_id: item.product.getId(),
            menu_name: item.product.getName(),
            quantity: item.product.getQuantity(),
            size: item.product.getSize().toUpperCase(),
            menu_price: item.product.getPrice(),
            note: ""
        };

        if (item.product instanceof Bakery) {
            itemData.isKeto = item.product.isKeto();
        } else if (item.product instanceof Beverage) {
            itemData.sweetness = item.product.getSweet();
        } else { // Food 
            itemData.spicy_level = item.product.getSpicy();
        }

        return itemData;
    });

    
    return {
      customer_id: parseInt(this.#uid),
      customer_name: this.#custName,
      order_id: parseInt(this.#oid),
      order_table: this.#tableNo,
      order_status: this.#status,
      order_items: orderItems,
      order_total: this.#order.computeTotalPrice(),
  };
}

  sendToKitchen() {
    console.log(this.#order.getProducts());

    const orderItems = this.#order.getProducts().map((item) => {
      let itemData = {
        menu_id: item.product.getId(),
        quantity: item.product.getQuantity(),
        size: item.product.getSize().toUpperCase(),
        note: "",
      };

      if (item.product instanceof Bakery) {
        itemData.keto = item.product.isKeto();
      } else if (item.product instanceof Beverage) {
        itemData.sweetness = item.product.getSweet();
      } else {
        // Food
        itemData.spicy_level = item.product.getSpicy();
      }

      return itemData;
    });
    const data = {
      from: "kitchen",
      to: "kitchen",
      customer_id: parseInt(this.#uid),
      customer_name: this.#custName,
      order_id: parseInt(this.#oid),
      order_table: this.#tableNo,
      order_status: this.#status,
      order_items: orderItems,
    };
    console.log(data);
    axios
      .post("http://localhost:3001/api/kitchen/", {
        from: "kitchen",
        to: "kitchen",
        customer_id: parseInt(this.#uid),
        customer_name: this.#custName,
        order_id: parseInt(this.#oid),
        order_table: this.#tableNo,
        order_status: this.#status,
        order_items: orderItems,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log();
        console.log(error);
      });
  }
}
