// Name: Zeeshan Hassan
// Date: 2 / 12 / 2023

// Modifying Old Guest List:
let guestList: string[] = ["Minahil", "Raza", "Ali", "Shafi"];
let notAttending = "Minahil";
let newGuest = "Fozia";
guestList[guestList.indexOf(notAttending)] = newGuest;
for (var i = 0; i < guestList.length; i++) {
  console.log(
    `Hi ${guestList[i]}, You're invited to our home tonight for a dinner. Your presence would be amazing !`
  );
}
console.log(notAttending + " " + "Can't make it for the dinner tonight. ");
