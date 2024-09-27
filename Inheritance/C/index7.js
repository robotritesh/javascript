
const car1 = new Car('Toyota', 'Corolla', 2020);
const car2 = new Car('Honda', 'Civic', 2021);
const car3 = new Car('Ford', 'Explorer', 2020);

const regularCustomer = new Customer('Alice');
const premiumCustomer = new PremiumCustomer('Bob', 0.15); 


regularCustomer.rentCar(car1); 
premiumCustomer.rentCar(car2); 
premiumCustomer.rentCar(car3); 


console.log(`Rental price for Alice: $${calculateRentalPrice('Sedan', 5, regularCustomer)}`); 
console.log(`Rental price for Bob: $${calculateRentalPrice('SUV', 3, premiumCustomer)}`); 


regularCustomer.returnCar(car1); 
premiumCustomer.returnCar(car2); 


Maintenance(car3, 3000); 
