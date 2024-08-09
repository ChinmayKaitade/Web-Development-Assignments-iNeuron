  /*01. Imagine you are working for a social media company. You have a list of all the users. Your job is to create a
  function that checks if a specific username is in that list. The function should take the username as input and tell
  you whether it's present in the list of users or not.*/

let allUsersList = [
  "Mithun",
  "Aman",
  "Dipak",
  "Sumit",
  "Tushar",
  "Shankar",
  "Akash",
  "Shivam",
  "Abhishek",
];

function isUserPresent(user) {
  if (allUsersList.includes(user)) {
    console.log(`Yes, ${user} is a valid user.`);
    return true;
  } else {
    console.log(`No, ${user} is not a valid user.`);
    return true;
  }
}

isUserPresent("Mithun");

// OUTPUT: Yes, Mithun is a valid user.

isUserPresent("Someone");

// OUTPUT: No, Someone is not a valid user.

isUserPresent("Aman");

// OUTPUT: Yes, Aman is a valid user.

isUserPresent("John");

// OUTPUT: No, John is not a valid user.
