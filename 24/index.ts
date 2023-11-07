let my_Name_String:string = 'ASAD ALI';
// Unequality
console.log("My Name Is == 'Asad'? I Predict False.");
console.log(my_Name_String == 'Asad');
// Equality
console.log("My Name Is == 'ASAD ALI'? I Predict True.");
console.log(my_Name_String == 'ASAD ALI');
console.log(`My Name In Real Variable Is ${my_Name_String}`);

let cityName:string = 'KARACHI';
// Unequality
console.log("My City Name Is == 'karachi'? I Predict False.");
console.log(cityName.toLowerCase() == 'KARACHI');

// Equality
console.log("My City Name Is == 'KARACHI'? I Predict True.");
console.log(cityName.toUpperCase() == 'KARACHI');
console.log(`My City Name In Real Variable Is ${cityName}`);

let num:number = 22;

console.log(`My Number Is ${num} Is less than < 35 ? I Predict True.`);
console.log(num < 35);

console.log(`My Number Is ${num} Is Greater than > 35 ? I Predict False.`);
console.log(num > 35);

console.log(`My Number Is ${num} Is Lessthan Equal To <= 22 ? I Predict True`);
console.log(num <= 22);

console.log(`My Number Is ${num} Is Greaterthan Equal To >= 122 ? I Predict False.`);
console.log(num >= 122);

let a:boolean =true;
let b:boolean =true;
console.log(a&&b);

let c:boolean = false;
let d:boolean = true;
console.log(c&&d);

let e:boolean = true;
let f:boolean = false;

console.log(e||f);

let g:boolean = false;
let h:boolean = false;
console.log(g||h);

const colors:string[]=["Red","Green","Blue"];
console.log(colors.includes("Blue"));
console.log(colors.includes("White"));


const fruits:string[]=['orange','mango','banana'];
console.log(!fruits.includes('orange'));
console.log(!fruits.includes('grapes'));
