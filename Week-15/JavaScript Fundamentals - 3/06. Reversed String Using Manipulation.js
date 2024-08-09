/*06. Create a function that takes a string as input and returns the string
manipulation techniques. */

// Function to reverse a string

function reverseString(input) {
return input.split('').reverse().join("");
}

const originalString = "PW Skills";

const reversedString = reverseString(originalString);

console.log(reversedString);
