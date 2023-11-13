var guestList = ["Minahil", "Raza", "Ali", "Shafi"];
// console.log(`Hi ${guests[0]}, I have arranged a dinner for you tonight. Your presence would be amazing !`);
// console.log(`Hi ${guests[1]}, I have arranged a dinner for you tonight. Your presence would be amazing !`);
// console.log(`Hi ${guests[2]}, I have arranged a dinner for you tonight. Your presence would be amazing !`);
// console.log(`Hi ${guests[3]}, I have arranged a dinner for you tonight. Your presence would be amazing !`);
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi ".concat(guestList[i], ", I have arranged a dinner for you tonight. Your presence would be amazing !"));
}
