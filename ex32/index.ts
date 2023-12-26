// Date: 24/12/2023
// Zeeshan Hassan
// Pizzas: Program for printing messages for my favorite pizzas with their names.

const favPizzas: string[] = ["Creamy Cheese", "Chicken Fagita", "Afghani Kabab"];
// for (let i=0; i < favPizzas.length; i++) {
//     console.log(favPizzas[i]);
// }
for (let pizza of favPizzas) {
    console.log(`I like ${pizza} pizza.`)
}
console.log("I really love pizza! 😅")