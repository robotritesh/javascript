
Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car); 
        console.log(`${this.name} has rented ${car.make} ${car.model}.`);
    } else {
        console.log(`Sorry, ${car.make} ${car.model} is already rented.`);
    }
};
