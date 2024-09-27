
Customer.prototype.returnCar = function(car) {
    setTimeout(() => { 
        car.isAvailable = true; 
        this.rentedCars = this.rentedCars.filter(c => c !== car); 
        console.log(`${this.name} has returned ${car.make} ${car.model}.`);
    }, 2000); 
};
