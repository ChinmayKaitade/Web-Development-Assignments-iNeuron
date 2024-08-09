/*03.  Write a program that takes an object as input and returns the number of properties it has. */

// Function to return the number of properties in an object
function countProperties(obj) {
    return Object.keys(obj).length;
}
const exampleObject = { a: 1, b: 2, c: 3 };
console.log(countProperties(exampleObject));
