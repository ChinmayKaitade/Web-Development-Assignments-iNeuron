/*03. Write a function that takes in an array of integers and a callback function, and
returns a new array where each Write a JavaScript function called ageInDays that accepts
an object containing a person's first name, last name, and age in years as input. The 
function should concatenate the first and last name into a single string and store it in
a variable called fullName. It should then calculate the person's age in days and store 
it in a variable called ageInDays.

The ageInDays function should then return a callback function that logs a message to the
console. The message should include the person's full name and age in days, and should be
in the format: "The person's full name is [full name] and their age in days is 
[age in days]."

Note that the ageInDays function should not log the message to the console directly, but
should instead return a callback function that can be used to log the message at a later
time */

const personDetails = {
  firstName: "Chinmay",
  lastName: "Kaitade",
  age: "23",
};

// Function for Age In Days
function ageInDays(personObject, callback) {
  const fullName = `${personObject.firstName} ${personObject.lastName}`;
  const ageInDays = personObject.age * 365;
  callback(fullName, ageInDays);
}

function resultLogs(fullName, ageInDays) {
  console.log(
    `The Person's full name is ${fullName} and their age in days is ${ageInDays}`
  );
}

// Calling Function Here
ageInDays(personDetails, resultLogs);
