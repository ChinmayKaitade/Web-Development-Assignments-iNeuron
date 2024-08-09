/*04. Write a program that takes a list of books, including their authors and publication years as input. The program 
should then filter out all books that were published before 2010 and create a new array with the remaining 
books, but with their author names capitalized. */

const books = [
  {
    title: "The Namesake",
    author: "Jhumpa Lahiri",
    year: 2010,
  },
  {
    title: "The God of Small Things",
    author: "Arundhati Roy",
    year: 1997,
  },
  {
    title: "A Suitable Boy",
    author: "Vikram Seth",
    year: 1993,
  },
  {
    title: "The White Tiger",
    author: "Aravind Adiga",
    year: 2018,
  },
  {
    title: "Midnight's Children",
    author: "Salman Rushdie",
    year: 1981,
  },
];

const filteredBooks = books.filter((book) => {
  return book.year >= 2010;
});

const result = filteredBooks.map((book) => {
  return {
    ...book,
    author: book.author.toUpperCase(),
  };
});

console.log(result);
