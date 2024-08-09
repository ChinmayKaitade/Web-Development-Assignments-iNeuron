/*07. Build a program that utilizes a Map to store user information (name, age, email) and allows adding, 
updating, and deleting user records. */

// Program using a Map to store user information

const userMap = new Map();

function addUser(name, age, email) {
const userInfo = { age, email };
userMap.set(name, userInfo);
}

function updateUser(name, age, email) {
if (userMap.has(name)) {
const userInfo = userMap.get(name);
userInfo.age = age;
userInfo.email = email;
}
}

function deleteUser(name) {
userMap.delete(name);
}

addUser("Alexa", 28, "alexa@example.com");

addUser("Bob", 25, "bob@example.com");
console.log(userMap);

updateUser("Alexa", 34, "alexaemail@example.com");
console.log(userMap);

deleteUser("Bob");
console.log(userMap);