// Name: Zeeshan Hassan
// Date: 2 / 12 / 2023
// Modifying Old Guest List:
var guestList = ["Minahil", "Raza", "Ali", "Shafi"];
var notAttending = "Minahil";
var newGuest = "Fozia";
guestList[guestList.indexOf(notAttending)] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Hey ".concat(guestList[i], "! You know what, I just found a bigger dinner Table. Congrats\uD83D\uDE4C\u270C. Now we can have some more guests"));
}
guestList.unshift("Muzaffar");
var indexForAddingNewGuest = guestList.length / 2;
guestList.splice(indexForAddingNewGuest, 0, "Ijaz");
guestList.push("Moin");
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi ".concat(guestList[i], ", You're invited to our home tonight for a dinner. Your presence would be amazing !"));
}
