class Customer {
  constructor(name, tableNo) {
    this.name = name;
    this.tableNo = tableNo;
  }

  pay() {
    // Navigate to Payment component
    this.props.history.push("/qr");
  }

  showReceipt() {}
}
