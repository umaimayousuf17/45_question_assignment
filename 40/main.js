// define the make album funtion
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three function and creating 3 varibles with different valuse
var album1 = make_album("Hamza", "Album title 1");
var album2 = make_album("Usman", "Album title 2");
// Calling a make_album function with third parameter  1
var album3 = make_album("Ali", "Album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
