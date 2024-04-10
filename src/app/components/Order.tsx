class Order {
  uid: string;
  oid: string;
  tableNo: string;
  productDict: { [key: string]: number };

  constructor(uid,oid,tableNo) {
      this.uid = uid;
      this.oid = oid;
      this.tableNo = tableNo;
      this.productDict = {};
  }

  addProduct(productId, quantity) {
    if (this.productDict[productId]) {
      this.productDict[productId] += quantity;
    } else {
      this.productDict[productId] = quantity;
    }
  }

  removeProduct(productId) {
    delete this.productDict[productId];
  }

  updateProduct(productId, quantity) {
    if (this.productDict[productId]) {
      this.productDict[productId] = quantity;
    }
  }

  getTotalPrice(products) {
    let totalPrice = 0;
    // loop ดู quantity and productId
    for (const productId in this.productDict) {
      const quantity = this.productDict[productId];
      const product = products.find(product => product.id === productId);
      if (product) {
        totalPrice += product.price * quantity;
      }
    }
    return totalPrice;
  }

  getOrderDetail(products) {
    const orderDetail = [];
    for (const productId in this.productDict) {
      const quantity = this.productDict[productId];
      const product = products.find(product => product.id === productId);
      if (product) {
        orderDetail.push({ product, quantity });
      }
    }
    return orderDetail;
  }

  pay() {
    // ทำการส่ง order ไปยัง kitchen
    console.log('Order sent to kitchen');
  }
}