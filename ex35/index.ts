// Date: 26/12/2023
// Zeeshan Hassan

// Modifying the old make_shirt function:

function make_shirt(
  size: string = "large",
  message: string = "I love typescript"
) {
  console.log(
    ` This shirt is of ${size} size. On which "${message}" is printed.`
  );
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I am learning web development");
