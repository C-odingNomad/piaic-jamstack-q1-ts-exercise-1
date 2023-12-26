// Date: 26/12/2023
// Zeeshan Hassan
//
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log(" This shirt is of ".concat(size, " size. On which \"").concat(message, "\" is printed."));
}
// make_shirt("medium", "I love TypeScript");
make_shirt();
make_shirt("medium");
make_shirt("small", "I am learning web development");
