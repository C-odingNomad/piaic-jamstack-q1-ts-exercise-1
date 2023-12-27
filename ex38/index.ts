// Date: 27/12/2023
// Zeeshan Hassan

// Creating a function for making different albums:

function make_album(artist_name, album_title, number_of_tracks?) {
  if (number_of_tracks) {
    const music_album = {
      artist: artist_name,
      album: album_title,
      tracks: number_of_tracks,
    };
    console.log(music_album);
  } else {
    const music_album = {
      artist: artist_name,
      album: album_title,
    };
    console.log(music_album);
  }
}
make_album("The Beatles", "Abbey Road");
make_album("Queen", "A Night at the Opera", 13);
make_album("Pink Floyd", "The Dark Side of the Moon");
