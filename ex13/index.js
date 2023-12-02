// Name: Zeeshan Hassan
// Date: 2 / 12 / 2023
// Modifying Old Guest List:
var guestList = ["Minahil", "Raza", "Ali", "Shafi"];
var notAttending = "Minahil";
var newGuest = "Fozia";
guestList[guestList.indexOf(notAttending)] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi ".concat(guestList[i], ", You're invited to our home tonight for a dinner. Your presence would be amazing !"));
}
console.log(notAttending + " " + "Can't make it for the dinner tonight. ");
