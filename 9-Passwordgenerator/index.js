const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

const numbersEl = document.getElementById("numbers");
const lowerEl = document.getElementById("lowercase");
const symbolsEl = document.getElementById("symbols");
const upperEl = document.getElementById("uppercase");
const passwordLength = document.getElementById("tentacles");
const search = document.querySelector(".input");
const generate = document.querySelector(".generate");
const form = document.querySelector(".form");

function randomLower() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function randomUpper() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function randomNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function randomSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}
function getPassword() {
  let s = [];
  if (numbersEl.checked) {
    const element = randomNumber();
    s.push(element);
  }
  if (symbolsEl.checked) {
    const element = randomSymbols();
    s.push(element);
  }
  if (lowerEl.checked) {
    const element = randomLower();
    s.push(element);
  }
  if (upperEl.checked) {
    const element = randomUpper();
    s.push(element);
  }
  return s[Math.floor(Math.random() * s.length)];
}

function password() {
  const xs = [];
  for (i = 0; i < passwordLength.value; i++) {
    xs.push(getPassword());
  }
  search.value = xs.join("");
}

generate.addEventListener("click", () => {
  password();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  password();
});
