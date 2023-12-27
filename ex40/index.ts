// Date: 27/12/2023
// Zeeshan Hassan

// Making every magicians great, in another function:-

const magicians = ["Houdini", "Criss", "Blaine", "Teller", "Shin"];
function show_magicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// const magicians = ["Houdini", "Criss", "Blaine", "Teller", "Shin"];
function make_magicians_great(magicians: string[]) {
  for (const magician of magicians) {
    console.log(`Great ${magician}`);
  }
}
console.log("\nOriginal List: ");
show_magicians(magicians);
console.log("\nModified List: ");
make_magicians_great(magicians);
