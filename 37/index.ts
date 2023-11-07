function make_shirt (size:string="large",text:string="I Love TypeScript"){
    if(size=="large"){
        console.log(`${size} Shirt With Text of ${text}`);    
    }else if(size=="medium"){
        console.log(`${size} Shirt With Text of I Love Python`);    
    }else if(size=="small"){
        console.log(`${size} Shirt With Text of I Love JavaScript`);
    }else{
        console.log("Syxtax Error");    
    }
}
make_shirt("small")