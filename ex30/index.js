// Date: 24/12/2023
// Zeeshan Hassan
// 
var current_users = ["iman", "john", "michael", "john", "alex"];
var new_users = ["hormozi", "MICHAEL", "robert", "IMAN", "zack"];
var _loop_1 = function (new_username) {
    var lowercase_new_username = new_username.toLowerCase();
    if (current_users.some(function (current_username) { return current_username.toLowerCase() === lowercase_new_username; })) {
        console.log("".concat(new_username, " is already taken. Please choose a new username."));
    }
    else {
        console.log("".concat(new_username, " is available"));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
// Create the lists of usernames
// const current_users: string[] = ["alice", "bob", "john", "mary", "peter"];
// const new_users: string[] = ["david", "ALICE", "JOHN", "lisa", "frank"];
// // Loop through the new_users list
// for (const new_username of new_users) {
//   // Convert both usernames to lowercase for case-insensitive comparison
//   const lowercase_new_username = new_username.toLowerCase();
//   // Check if the new username exists in current_users (case-insensitively)
//   if (current_users.some((current_username) => current_username.toLowerCase() === lowercase_new_username)) {
//     console.log(`${new_username} is already taken. Please choose a new username.`);
//   } else {
//     console.log(`${new_username} is available.`);
//   }
// }
