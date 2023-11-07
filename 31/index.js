var namesArray = ['Asad', 'Ali', 'Ghufran', 'Sami', 'admin', 'Ayan', 'Haseeb'];
function greet() {
    for (var i = 0; i < namesArray.length; i++) {
        // if(namesArray[i] === "admin"){
        //     console.log("Hello admin, would you like to see a status report?");   
        // }else{
        //     console.log(`Welcome ${namesArray[i]} To Our Website`);
        // }
    }
    namesArray = [];
    if (namesArray.length === 0) {
        console.log("We need to find some users!");
    }
}
greet();
