// Date: 23/12/2023
// Zeeshan Hassan

// Creating Some More Conditionals Tests:-

// Testing 2 Strings:-

let str1 = "Laptop";
let str2 = "Computer";
console.log(str1 === str2);
console.log(str1 !== str2);

// Testing Using Lower Case:-
let str3 = "For Example";
console.log(str3.toLowerCase() === "for example");

// Testing Numerical Values:-
let num1 = 5;
let num2 = 10;
console.log("5 !== 10 : ", num1 !== num2);
console.log("5 === 10 : ", num1 === num2);
console.log("5 > 10 : ", num1 > num2);
console.log("5 < 10 : ", num1 < num2);
console.log("5 <= 10 : ", num1 <= num2);
console.log("5 >= 10 : ", num1 >= num2);

// Testing Conditions Using " && " and " || ":-
let isIamFat = false;
let isIamSmart = true;
console.log(isIamFat && isIamSmart);
console.log(isIamFat || isIamSmart);

// Testing the presence of an item in an array:-
const fruits: string[] = ["apple", "mango", "banana", "kiwi"];

// As I can't use ".include()" func, so I'm using .indexof() :-
console.log(
  "If 'kiwi' is present in above array it'll show it's index : ",
  fruits.indexOf("kiwi")
);
