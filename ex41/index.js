// Date: 27/12/2023
// Zeeshan Hassan
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//
var magicians = ["Houdini", "Criss", "Blaine", "Teller", "Shin"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makingGreat(magicians) {
    var greatMagicians = magicians.map(function (name) { return "The Great ".concat(name); });
    return greatMagicians;
}
var copiedMagicians = __spreadArray([], magicians, true);
var greatMagicians = makingGreat(copiedMagicians);
console.log("\nOriginal List: ");
show_magicians(magicians);
console.log("\Modified List: ");
show_magicians(greatMagicians);
