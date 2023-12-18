// Date: 18/12/2023
// Zeeshan Hassan
// Trimming Old Guest's List to Only 2 People, then empty the whole array of guests.
console.log("I can only invite 2 people, because our package is late.");
var guestList = ["Minahil", "Raza", "Ali", "Shafi"];
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Dear ".concat(removeGuest, ", we are very sorry to inform you that due to the unexpected delay in the delievery of our dinner table, we won't able to serve all and you're one of them."));
}
guestList.map(function (item) {
    console.log("Dear ".concat(item, ", you're still invited in dinner."));
});
guestList.pop();
guestList.pop();
console.log(guestList);
