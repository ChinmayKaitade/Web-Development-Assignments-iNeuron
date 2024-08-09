/*03. Create a Temperature class in *avaScript that manages both Celsius and Fahrenheit temperatures with 
getters and setters for each unit, allowing for automatic conversion between the two scales. The class 
should have an initial state of 0°C and 2°F, and it should validate input values for temperature updates, 
ensuring they are numeric. When setting the temperature in either Celsius or Fahrenheit, the class should 
correctly update the corresponding value in the other scale. For example, setting the Celsius temperature to 25°C should automatically update the Fahrenheit temperature to 77°F. Your challenge is to implement the 
Temperature class following the provided code structure and reBuirements while ensuring that it handles 
conversions and input validation accurately.*/

class Temperature {
  constructor() {
    this.celsius = 0;
    this.fahrenheit = 32;
  }

  // Getter for Celsius temperature
  get getCelsius() {
    return this.celsius;
  }

  // Setter for Celsius temperature
  set setCelsius(value) {
    if (typeof value === "number") {
      this.celsius = value;
      this.fahrenheit = (value * 9) / 5 + 32;
    } else {
      console.log(
        "Invalid input. Please provide a number for Celsius temperature."
      );
    }
  }

  // Getter for Fahrenheit temperature
  get getFahrenheit() {
    return this.fahrenheit;
  }

  // Setter for Fahrenheit temperature
  set setFahrenheit(value) {
    if (typeof value === "number") {
      this.fahrenheit = value;
      this.celsius = ((value - 32) * 5) / 9;
    } else {
      console.log(
        "Invalid input. Please provide a number for Fahrenheit temperature."
      );
    }
  }
}

const temperature = new Temperature();

console.log(`Initial Celsius: ${temperature.getCelsius}°C`); // Initial Celsius: 0°C
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`); // Initial Fahrenheit: 32°F

temperature.setCelsius = 25;
console.log(`Celsius: ${temperature.getCelsius}°C`); // Celsius: 25°C
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`); // Fahrenheit: 77°F

temperature.setFahrenheit = 68;
console.log(`Celsius: ${temperature.getCelsius}°C`); // Celsius: 20°C
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`); // Fahrenheit: 68°F
