let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
     let num: number = numbers[i];
     let ordinal: string;

    if (num === 1 || num === 21 || num === 31) {
        ordinal = 'st';
    } else if (num === 2 || num === 22) {
        ordinal = 'nd';
    } else if (num === 3 || num === 23) {
        ordinal = 'rd';
    } else {
        ordinal = 'th';
    }
    console.log(`${num}${ordinal}`);
}