export class Receipt {
  constructor(oid, uid, tableNo, custName, totalPrice) {
    this.oid = oid;
    this.uid = uid;
    this.tableNo = tableNo;
    this.custName = custName;
    this.totalPrice = totalPrice;
  }

  sendToKitchen() {
    // Send order to kitchen
    console.log("Order sent to kitchen");
  }

  updateStock() {
    // Update stock
    console.log("Stock updated");
  }
}
