
function Maintenance(car, delay) {
    setTimeout(() => {
        car.isAvailable = true; 
        console.log(`${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
}
