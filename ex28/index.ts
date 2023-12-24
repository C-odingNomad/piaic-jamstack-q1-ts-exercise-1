// Date: 23/12/2023
// Zeeshan Hassan

// Looping through an array, to print a personalized messsage to each of them seperately:-

const users = ["iman", "john", "michael", "admin", "alex"];
for (let i = 0; i < users.length; i++) {
    if (users[i] === "admin") {
        console.log("Hello admin! would you like to see a status report ?");
    }
    else{
        console.log(`Hi ${users[i]}, thank you for logging in again.`)
    }
}