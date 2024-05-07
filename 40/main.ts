// define the make album funtion

function make_album(artist_name: string, album_title: string, tracks?: number) {
    let album: {artist: string, title: string, tracks?: number} = {
      artist: artist_name,
      title: album_title,
    };
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
    return album;
  }
  
  // calling three function and creating 3 varibles with different valuse

  let album1 = make_album("Hamza", "Album title 1");
let album2 = make_album("Usman", "Album title 2");

// Calling a make_album function with third parameter  1
let album3 = make_album("Ali", "Album title 3", 10);

console.log(album1);
console.log(album2);
console.log(album3);


