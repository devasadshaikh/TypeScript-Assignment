function make_album(atristName:string,albumTitle:string,numTrack?:number){
    if(atristName && albumTitle && numTrack){
        return `Album by ${atristName}: "${albumTitle}" Number of tracks ${numTrack}`;
    }
    else if(atristName && albumTitle){
        return `Album by ${atristName}: "${albumTitle}"`

    }else{
        console.log("Syntax ERROR");     
    }
}
let album1 = make_album("Kafi Khalil","Kahani suno");
console.log(album1);

let album2 = make_album("Atif Aslam","Kuch Is Tarah",12)
console.log(album2);

let album3 = make_album("Rahat Fateh","Tumhe Dillagi");
console.log(album3);
