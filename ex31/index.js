// Date: 24/12/2023
// Zeeshan Hassan
// Ordinal Numbers:- Printing element of an array in order.
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var num = nums_1[_i];
    var endingOfNums = void 0;
    if (num === 1) {
        endingOfNums = "st";
    }
    else if (num === 2) {
        endingOfNums = "nd";
    }
    else if (num === 3) {
        endingOfNums = "rd";
    }
    else {
        endingOfNums = "th";
    }
    console.log("".concat(num).concat(endingOfNums));
}
