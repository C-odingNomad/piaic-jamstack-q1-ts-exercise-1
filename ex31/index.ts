// Date: 24/12/2023
// Zeeshan Hassan

// Ordinal Numbers:- Printing element of an array in order.

const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of nums) {
  let endingOfNums: string;
  if (num === 1) {
    endingOfNums = "st";
  } else if (num === 2) {
    endingOfNums = "nd";
  } else if (num === 3) {
    endingOfNums = "rd";
  } else {
    endingOfNums = "th";
  }
  console.log(`${num}${endingOfNums}`);
}
