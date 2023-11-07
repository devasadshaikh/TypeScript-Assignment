function make_album(atristName, albumTitle, numTrack) {
    if (atristName && albumTitle && numTrack) {
        return "Album by ".concat(atristName, ": \"").concat(albumTitle, "\" Number of tracks ").concat(numTrack);
    }
    else if (atristName && albumTitle) {
        return "Album by ".concat(atristName, ": \"").concat(albumTitle, "\"");
    }
    else {
        console.log("Syntax ERROR");
    }
}
var album1 = make_album("Kafi Khalil", "Kahani suno");
console.log(album1);
var album2 = make_album("Atif Aslam", "Kuch Is Tarah", 12);
console.log(album2);
var album3 = make_album("Rahat Fateh", "Tumhe Dillagi");
console.log(album3);
