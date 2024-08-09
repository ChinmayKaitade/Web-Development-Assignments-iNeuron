/*04. Declare three variables, one using let, one usin3 var, and one using const, all
inside a block scope. Asign them values and lo3 their values to the console Aefore and
after they are declared to demonstrate variable hoisting */

{
  console.log(x); //Undefined
  console.log(y); //Cannot access 'y' before initialization
  console.log(z); //Reference Error

  var x = Chinmay;
  let y = Sharad;
  const z = Kaitade;

  console.log(x);
  console.log(y);
  console.log(z);
}
