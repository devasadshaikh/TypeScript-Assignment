let gNames =["Asad","Abdul","Khan","Shaikh"]



for(let x=0;x<gNames.length;x++){
    console.log(`${gNames[x]} You Are Invited For Dinner.`);
}

console.log(`\t${gNames[3]} Is Not Coming`);
gNames.pop();

for(let a=0;a<gNames.length;a++){
    console.log(`${gNames[a]} Please Come You Are Invited`);
    
}

console.log(`\t We found a bigger dinner table.`);

gNames.unshift("Sami");

gNames.splice(2,0,"Affan");

gNames.push("Shahrukh");

for(let b=0;b<gNames.length;b++){
    console.log(`${gNames[b]} Comes You Are Also Invited Because We Found A Bigger Dinner Table`);
    
}

console.log(`\t We can invite only two people for dinner.`);

console.log(gNames.shift() + " SORRY");
console.log(gNames.shift() + " SORRY");
console.log(gNames.shift() + " SORRY");
console.log(gNames.shift() + " SORRY");

for(let c=0;c<gNames.length;c++){
    console.log(`${gNames[c]} PLEASE COME`);
    
}

gNames.shift();
gNames.shift();

console.log(gNames);






