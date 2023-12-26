// Date: 26/12/2023
// Zeeshan Hassan

// Program of different animals of same characteristics, explaining a lit bit about them.

const animals = ["Cheetah", "Lion", "Leopard"];
for (const animal of animals) {
  switch (animal) {
    case "Cheetah":
      console.log(
        `${animal}, the sprinters of the savanna, kings of raw speed.`
      );
      break;
    case "Lion":
      console.log(
        `${animal}, the roaring royalty, rulers of the pride, mane attraction.`
      );
      break;
    case "Leopard":
      console.log(
        `${animal}, the jungle jewels, stealthy masters of disguise, spotted shadows.`
      );
      break;
  }
}
console.log(
  "All three big cats have same characteristic of being the fastest land mammals, reaching speeds of 70-80 mph!"
);
