/*09. You are given an array of numbers and strings. Your task is to find the first string in the
array. On finding the first string print "Found the Firt String" and its value.*/

const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    console.log(`Found The First String: ${arr[i]}`);
    break;
  }
}
