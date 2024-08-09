/*06. Write a function that asynchronously fetches data from an API 

[ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.*/

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}

// Function Calling to Fetch Data from API
fetchData();
