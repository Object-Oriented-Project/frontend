import {cust} from "../page"
export default  class Receipt {
  #oid : string;
  #uid : string;
  #tableNo : string;
  #custName : string 
  // totalPrice : number;
  #status : string ;
  constructor(oid: string, uid: string, tableNo: string, custName:string, status: string) {
    this.#oid = oid;
    this.#uid = uid;
    this.#tableNo = tableNo; // ได้จากตอนเลือกโต๊ะ
    this.#custName = custName; // เอาจาก Obj cust ?
    // this.totalPrice = totalPrice;
    this.#status = status; // สถานะการทำอาหาร
  }

  sendToKitchen() {

  }

}
