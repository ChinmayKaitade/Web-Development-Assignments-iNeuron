const resultEl = document.getElementById("result");
const generateEl = document.getElementById("generate");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const clipboardEl = document.getElementById("clipboard");
const errorEl = document.getElementById("ShowError");

// Define Character Sets
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

generateEl.addEventListener("click", () => {
  console.log("CLICKED");
  resultEl.style.color = "black";
  const length = lengthEl.value;
  const lower = lowercaseEl.checked;
  const upper = uppercaseEl.checked;
  const number = numbersEl.checked;
  const symbol = symbolsEl.checked;
  const password = generatePassword(length, lower, upper, number, symbol);
  resultEl.innerText = password;
});

// Function to Generate a Random Character from a given Character Set
function getRandomChar(charSet) {
  const randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet.charAt(randomIndex);
}

// Function to Generate a Random Password
function generatePassword(
  length,
  useLowercase,
  useUppercase,
  useNumbers,
  useSpecialChars
) {
  let charSet = "";
  if (length < 4 || length > 20) {
    errorEl.style.color = "red";
    errorEl.innerHTML =
      "Error: You must choose only length between 4 and 20 for the password.❗";
    return "";
  }
  if (useLowercase) charSet += lowercaseChars;
  if (useUppercase) charSet += uppercaseChars;
  if (useNumbers) charSet += numericChars;
  if (useSpecialChars) charSet += specialChars;

  if (charSet === "") {
    errorEl.style.color = "red";
    errorEl.innerHTML =
      "Error: You must select at least one character set for the password.❗";
    return "";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChar = getRandomChar(charSet);
    password += randomChar;
  }
  errorEl.innerHTML = "";
  resultEl.style.background = "transparent";
  return password;
}

clipboardEl.addEventListener("click", () => {
  console.log(resultEl.innerHTML);
  if (resultEl.innerHTML.includes(" ") || resultEl.innerHTML === "") return;
  resultEl.style.background = "#0087ff5c";
  errorEl.innerHTML = "Copied Sucessfully!";
  errorEl.style.color = "grey";
  errorEl.style.fontWeight = 700;
  navigator.clipboard.writeText(resultEl.textContent);
});
