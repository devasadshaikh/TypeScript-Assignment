var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ordinal;
for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    // let ordinal: string;
    if (num === 1 || num === 21 || num === 31) {
        ordinal = 'st';
    }
    else if (num === 2 || num === 22) {
        ordinal = 'nd';
    }
    else if (num === 3 || num === 23) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log("".concat(num).concat(ordinal));
}
