
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}


Product.prototype.displayDetails = function() {
    console.log(`Product Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
};


Product.prototype.updateQuantity = function(amount) {
    this.quantity += amount;
    console.log(`${this.name} quantity updated to ${this.quantity}.`);
};
