// Date: 27/12/2023
// Zeeshan Hassan
// 
var magicians = ["Houdini", "Criss", "Blaine", "Teller", "Shin"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// const magicians = ["Houdini", "Criss", "Blaine", "Teller", "Shin"];
function make_magicians_great(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log("Great ".concat(magician));
    }
}
console.log("\nOriginal List: ");
show_magicians(magicians);
console.log("\nModified List: ");
make_magicians_great(magicians);
