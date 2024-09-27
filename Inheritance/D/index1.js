
function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity); 
    this.brand = brand;   
    this.model = model;   
}


Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;


Electronics.prototype.powerOn = function() {
    console.log(`${this.name} is powered on.`);
};

Electronics.prototype.powerOff = function() {
    console.log(`${this.name} is powered off.`);
};
