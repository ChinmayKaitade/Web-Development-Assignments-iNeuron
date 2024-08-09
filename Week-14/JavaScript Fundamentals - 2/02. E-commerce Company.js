/*02. Imagine you are work in an e-commerce company. Your task is to create a function that takes the pieces of all the
products in a customer's cart as input parameters. The function shoud then caculate and return the total sum of all the 
products prices. This will help the company easily calculate the total cost of the customer's shopping cart.*/

function calculateTotalCartValue() {
  let totalValue = 0;
  for (let i = 0; i < arguments.length; i++) {
    totalValue = totalValue + arguments[i];
  }
  console.log(`The total cart value is ${totalValue}`);
  return totalValue;
}

calculateTotalCartValue(125, 20, 30);

// OUTPUT: The total cart value is 175
