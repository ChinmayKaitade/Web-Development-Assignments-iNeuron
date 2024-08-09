/*03. Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript 
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should 
use the map higher-order function to create a new object with the converted prices in Rupees. */

// Object containing items with names, categories, and prices in USD
const items = [
  {
    name: "Iphone 15",
    category: "Mobile",
    priceUSD: 999,
  },
  {
    name: "Macbook Air",
    category: "Laptops",
    priceUSD: 1499,
  },
  {
    name: "Apple Watch",
    category: "Watches",
    priceUSD: 499,
  },
];
const exchangeRate = 80;

function convertToINR(priceInUSD) {
  return priceInUSD * exchangeRate;
}

const itemsInINR = items.map((item) => ({
  ...item,
  priceINR: convertToINR(item.priceUSD),
}));

console.log(itemsInINR);
