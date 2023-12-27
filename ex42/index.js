// Date: 27/12/2023
// Zeeshan Hassan
//Making a function which can holds the items of sandwich:-
function sandwichItems() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    if (ingredients.length === 0) {
        console.log("Plese choose some ingredients!!");
    }
    else {
        console.log("You're getting a Sandwich with: ");
        for (var _a = 0, ingredients_1 = ingredients; _a < ingredients_1.length; _a++) {
            var ingredient = ingredients_1[_a];
            console.log("- ".concat(ingredient));
        }
    }
}
sandwichItems("Cheese", "Butter", "Black Pepper", "Salt");
sandwichItems("Kecthup", "Mashed Potatoes");
sandwichItems("Boiled Eggs", "Mayonees");
