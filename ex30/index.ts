// Date: 24/12/2023
// Zeeshan Hassan

//Checking Usernames:- Comparing the uniqueness of the new usernames with existing ones. 

const current_users: string[] = ["iman", "john", "michael", "john", "alex"];
const new_users: string[] = ["hormozi", "MICHAEL", "robert", "IMAN", "zack"];
for (const new_username of new_users) {
  const lowercase_new_username = new_username.toLowerCase();
  if (
    current_users.some(
      (current_username) =>
        current_username.toLowerCase() === lowercase_new_username
    )
  ) {
    console.log(
      `${new_username} is already taken. Please choose a new username.`
    );
  } else {
    console.log(`${new_username} is available`);
  }
}
