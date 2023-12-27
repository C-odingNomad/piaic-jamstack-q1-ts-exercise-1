// Date: 27/12/2023
// Zeeshan Hassan
// Displaying the array of magicians through function:
var magicians = ["Houdini", "Criss", "Blaine", "Teller", "Shin"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicians);
