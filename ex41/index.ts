// Date: 27/12/2023
// Zeeshan Hassan

//Unchanged Magicians:-

const magicians = ["Houdini", "Criss", "Blaine", "Teller", "Shin"];

function show_magicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}

function makingGreat(magicians: string[]): string[] {
  const greatMagicians = magicians.map((name) => `The Great ${name}`);
  return greatMagicians;
}
const copiedMagicians = [...magicians];
const greatMagicians = makingGreat(copiedMagicians);

console.log("\nOriginal List: ");
show_magicians(magicians);

console.log("Modified List: ");
show_magicians(greatMagicians);
