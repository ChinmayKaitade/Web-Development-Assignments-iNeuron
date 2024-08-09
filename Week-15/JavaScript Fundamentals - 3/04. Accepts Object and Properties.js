/* 04. Develop a program that accepts an object and a property name, and checks if the object has the 
specified property. */

// Function to check if an object has a specified property
function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
    }
    const exampleObject = { name: "Alice", age: 25 };
    console.log(hasProperty(exampleObject, "age")); // true
    console.log(hasProperty(exampleObject, "email")); // false