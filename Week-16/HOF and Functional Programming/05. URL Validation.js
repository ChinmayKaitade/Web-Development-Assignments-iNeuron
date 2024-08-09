/*05. Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://, 
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. 
Print a message indicating if the input matches the conditions or not. */

const urlPattern =
  /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;

function isValidURL(input) {
  return urlPattern.test(input);
}

const url = "https://pwskills.com";

if (isValidURL(url)) {
  console.log(`"${url}" is a valid URL.`);
} else {
  console.log(`"${url}" is not a valid URL.`);
}
