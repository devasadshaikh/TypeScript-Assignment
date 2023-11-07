function makeSandwich(bread, kebabs) {
    var sauces = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        sauces[_i - 2] = arguments[_i];
    }
    return ("Making ".concat(bread, " with ").concat(kebabs, " and ").concat(sauces, " Sauces In Just 5 Minutes!"));
}
var p1 = makeSandwich("White Bread", "Shami kebab", "BBQ", "Chipotle");
console.log(p1);
var p2 = makeSandwich("Brown Bread", "BBQ", "Mayo", "Ketchup");
console.log(p2);
var p3 = makeSandwich("Roll", "Chicken Tikka", "Green Chutney", "Raita");
console.log(p3);
