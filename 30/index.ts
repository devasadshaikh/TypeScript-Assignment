const namesArray:string[]=['Asad','Ali','Ghufran','Sami','admin','Ayan','Haseeb'];
function greet():void{
    for(let i=0;i<namesArray.length;i++){
        if(namesArray[i] === "admin"){
            console.log("Hello admin, would you like to see a status report?");   
        }else{
            console.log(`Welcome ${namesArray[i]} To Our Website`);
        }
    }    
}
greet();

    
