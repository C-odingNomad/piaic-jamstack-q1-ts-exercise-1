// Date: 27/12/2023
// Zeeshan Hassan
// Creating a function for making different albums:
// function make_album(artist_name: string, album_title: string, numOfTrack?:number) {
//     const music_album = {};
//     music_album.artist = artist_name;
//     music_album.album = album_title; 
// }
// function make_album(artist_name, album_title, number_of_tracks?: number) {
//     // Create the album object
//     const albumInfo = {
//         artist: String,
//         album: String,
//         tracks: number_of_tracks
//     };
//     albumInfo.artist = artist_name;
//     albumInfo.album = album_title;
//     // Add the number of tracks if provided
//     // if (number_of_tracks) {
//     //   albumInfo.tracks = number_of_tracks;
//     // }
//     return albumInfo;
//   }
//   // Create and print three albums
//   const album1 = make_album("Taylor Swift", "Red");
//   console.log(album1);  // Output: { artist: "Taylor Swift", album: "Red" }
//   const album2 = make_album("Kendrick Lamar", "To Pimp a Butterfly", 14);
//   console.log(album2);  // Output: { artist: "Kendrick Lamar", album: "To Pimp a Butterfly", tracks: 14 }
//   const album3 = make_album("BTS", "Love Yourself: Tear", 11);
//   console.log(album3);  // Output: { artist: "BTS", album: "Love Yourself: Tear", tracks: 11 }
// function make_album(artist_name, album_title, numOfTrack?) {
//     const music_album = {
//         artist: String,
//         album: String,
//         numOfTrack: Number
//     }
//     music_album.artist = artist_name;
//     music_album.album = album_title;
//     if(numOfTrack) {
//         music_album.numOfTrack = numOfTrack;
//     }
//     // music_album.numOfTrack = numOfTrack;
//     // return music_album
//     console.log(music_album);
// }
// make_album("Haider Haider", "Mehmood Karimi");
// make_album("Haider Haider", "Mehmood Karimi", 14);
function make_album(artist_name, album_title, number_of_tracks) {
    if (number_of_tracks) {
        var music_album = {
            artist: artist_name,
            album: album_title,
            tracks: number_of_tracks
        };
        console.log(music_album);
    }
    else {
        var music_album = {
            artist: artist_name,
            album: album_title,
        };
        console.log(music_album);
    }
}
make_album("The Beatles", "Abbey Road");
make_album("Queen", "A Night at the Opera", 13);
make_album("Pink Floyd", "The Dark Side of the Moon");
