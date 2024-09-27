
function calculateRentalPrice(carType, days, customer) {
    const basePricePerDay = 50; 
    const typeMultiplier = {
        SUV: 1.5,
        Sedan: 1,
        Hatchback: 0.8,
    };
    
    let rentalPrice = basePricePerDay * (typeMultiplier[carType] || 1) * days;

    
    if (customer instanceof PremiumCustomer) {
        rentalPrice -= rentalPrice * customer.discountRate;
    }

    return rentalPrice;
}
