class Car {
    manufacturerName:string;
    modelNumber:number;
    color:string;
    constructor(maufacturerName:string,modelNumber:number,color:string){
        this.manufacturerName=maufacturerName;
        this.modelNumber=modelNumber;
        this.color=color;        
    }
}
let myCar1 = new Car("Toyota", 1234567890,"Red");
console.log(myCar1);

let myCar2 = new Car("Tesla",2562822736476,"Blue");
console.log(myCar2);
