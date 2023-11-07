var Car = /** @class */ (function () {
    function Car(maufacturerName, modelNumber, color) {
        this.manufacturerName = maufacturerName;
        this.modelNumber = modelNumber;
        this.color = color;
    }
    return Car;
}());
var myCar1 = new Car("Toyota", 1234567890, "Red");
console.log(myCar1);
var myCar2 = new Car("Tesla", 2562822736476, "Blue");
console.log(myCar2);
