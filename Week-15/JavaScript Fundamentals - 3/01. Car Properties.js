/*01. Create an object representing a car with properties like "make", "model", and "Year".
Write a function to display all the properties of the car.*/

// Object Representing a Car
const car = {
  make: "Renault Duster",
  model: "RXZ",
  year: 2022,
};

// Function to display all properties of the car
function displayCarProperties(car) {
    for (const property in car) {
    console.log(`${property}: ${car[property]}`);
    }
    }

displayCarProperties(car);
    