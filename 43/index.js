var magicianNames2 = ["David Blaine", "Derren Brown", "Siegfried & Roy", "Chris Angel"];
console.log(magicianNames2);
function make_great1() {
    var great_magicians = magicianNames2.map(function (magicianNames2) { return "Great ".concat(magicianNames2); });
    console.log(great_magicians);
}
make_great1() == show_magicians1();
function show_magicians1() {
}
show_magicians1();
