/*05. Declare a variable using let inside a Alock sscope and attempt to log its 
value to the console before it is assigned a value to demonstrate the temporal 
dead zone */

{
  console.log(x); //Cannot return 'x' before initialization (Reference Error)

  let x = "Hello";

  console.log(x);
}
