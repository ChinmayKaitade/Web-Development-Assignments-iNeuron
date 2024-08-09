/*01. Write a function that takes in an array of integers and a callback function, and
returns a new array where each element is doubled using the callback */

function doubleArray(arr, callback) {
  const doubledArray = arr.map((num) => {
    return callback(num);
  });
  return doubledArray;
}

const userArray = [2, 4, 6, 8, 10];

function callback(num) {
  return num * 2;
}

const doubledArray = doubleArray(userArray, callback);

console.log(doubledArray);
