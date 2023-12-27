// Date: 27/12/2023
// Zeeshan Hassan

// Displaying the array of magicians through function:

const magicians = ["Houdini", "Criss", "Blaine", "Teller", "Shin"];
function show_magicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}
show_magicians(magicians);
