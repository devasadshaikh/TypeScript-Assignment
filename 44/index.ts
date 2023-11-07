function makeSandwich(bread:string,kebabs:string,...sauces:string[]){
    return(`Making ${bread} with ${kebabs} and ${sauces} Sauces In Just 5 Minutes!`);

}
let p1 = makeSandwich("White Bread","Shami kebab","BBQ","Chipotle");
console.log(p1);

let p2 = makeSandwich("Brown Bread","BBQ","Mayo","Ketchup");
console.log(p2);

let p3 = makeSandwich("Roll","Chicken Tikka","Green Chutney","Raita");
console.log(p3);

