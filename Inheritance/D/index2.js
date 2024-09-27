
function Clothing(name, price, quantity, size, fabric) {
    Product.call(this, name, price, quantity); 
    this.size = size;         
    this.fabric = fabric;     
}


Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;


Clothing.prototype.getFabricType = function() {
    console.log(`${this.name} is made of ${this.fabric}.`);
};
