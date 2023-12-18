// Date: 18/12/2023
// Zeeshan Hassan
// Trimming Old Guest's List to Only 2 People, then empty the whole array of guests.

console.log("I can only invite 2 people, because our package is late.");
let guestList: string[] = ["Minahil", "Raza", "Ali", "Shafi"];
while (guestList.length > 2) {
  let removeGuest = guestList.pop();
  console.log(
    `Dear ${removeGuest}, we are very sorry to inform you that due to the unexpected delay in the delievery of our dinner table, we won't able to serve all and you're one of them.`
  );
}
guestList.map((item) => {
  console.log(`Dear ${item}, you're still invited in dinner.`);
});
guestList.pop();
guestList.pop();
console.log(guestList);
