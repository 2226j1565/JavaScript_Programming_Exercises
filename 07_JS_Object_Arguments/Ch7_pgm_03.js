// Function to create car objects
var buildCar;
var getCarInfo;
var car1;
var car2;
buildCar = function (make, model, year, color, mileage) {
    return {
        make: make,
        model: model,
        year: year,
        color: color,
        mileage: mileage
    };
};
getCarInfo = function (car) {
    return car.make.toUpperCase() + " " + car.model.toUpperCase() + " (" + car.year + ") - Color: " + car.color + ", Mileage: " + car.mileage + " miles";
};
car1 = buildCar("Toyota", "Camry", 2021, "Blue", 15000);
car2 = buildCar("Honda", "Civic", 2018, "Red", 30000);
console.log(getCarInfo(car1));
console.log(getCarInfo(car2));
