
function PremiumCustomer(name, discountRate = 0.1) {
    Customer.call(this, name); 
    this.discountRate = discountRate; 
}

PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;
