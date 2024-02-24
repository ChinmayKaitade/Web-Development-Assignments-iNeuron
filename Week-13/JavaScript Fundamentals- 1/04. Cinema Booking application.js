/*04. You are developing a booking application for a cinema. The ticket price depends on the type of the viewer
("child", "adult", or "senior"). Write a program which calculates the price accordingly and prints the total
price to be paid. Let's assume the ticket price for a child is Rs.100, adult ticket price is Rs.150 and ticket
price for a senior is Rs.120. */

let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

let childsPrice = 100 * numberOfChilds;
let adultsPrice = 150 * numberOfAdults;
let seniorsPrice = 120 * numberOfSeniors;

let totalPrice = childsPrice + adultsPrice + seniorsPrice;

console.log(`The total ticket price is ${totalPrice}`);
