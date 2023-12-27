// Date: 27/12/2023
// Zeeshan Hassan

//Making a function which can holds the items of sandwich:-

function sandwichItems(...ingredients: string[]) {
  if (ingredients.length === 0) {
    console.log("Plese choose some ingredients!!");
  } else {
    console.log("You're getting a Sandwich with: ");
    for (const ingredient of ingredients) {
      console.log(`- ${ingredient}`);
    }
  }
}
sandwichItems("Cheese", "Butter", "Black Pepper", "Salt")
sandwichItems("Kecthup", "Mashed Potatoes")
sandwichItems("Boiled Eggs", "Mayonees")