// Date: 26/12/2023
// Zeeshan Hassan
// Program of different animals of same characteristics, explaining a lit bit about them.
var animals = ["Cheetah", "Lion", "Leopard"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    switch (animal) {
        case "Cheetah":
            console.log("".concat(animal, ", the sprinters of the savanna, kings of raw speed."));
            break;
        case "Lion":
            console.log("".concat(animal, ", the roaring royalty, rulers of the pride, mane attraction."));
            break;
        case "Leopard":
            console.log("".concat(animal, ", the jungle jewels, stealthy masters of disguise, spotted shadows."));
            break;
    }
}
console.log("All three big cats have same characteristic of being the fastest land mammals, reaching speeds of 70-80 mph!");
