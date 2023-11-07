function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I Love TypeScript"; }
    if (size == "large") {
        console.log("".concat(size, " Shirt With Text of ").concat(text));
    }
    else if (size == "medium") {
        console.log("".concat(size, " Shirt With Text of I Love Python"));
    }
    else if (size == "small") {
        console.log("".concat(size, " Shirt With Text of I Love JavaScript"));
    }
    else {
        console.log("Syxtax Error");
    }
}
make_shirt("small");
