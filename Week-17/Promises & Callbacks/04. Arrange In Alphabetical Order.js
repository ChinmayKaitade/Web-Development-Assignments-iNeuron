/*04. Write a program that accepts a list of objects representing books [ title, author, and year]
and a callback function. The program should use the map function to create a new list containing 
only the titles of the books, and then pass this new list to the callback function. The callback
function should then log the titles to the console in alphabetical order */

const booksObj = [
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    year: "1997",
  },
  {
    title: "The Millionare Next Door",
    author: "Thomas J. Stanley",
    year: "1996",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    year: "2018",
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    year: "1937",
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    year: "2011",
  },
];

// Book Title Sorting
function titleLogs(titles) {
  titles.sort();
  console.log(titles.join(","));
}

function extractTitles(books, callback) {
  const titles = booksObj.map((book) => book.title);
  callback(titles);
}

// Extracting Titles
extractTitles(booksObj, titleLogs);
