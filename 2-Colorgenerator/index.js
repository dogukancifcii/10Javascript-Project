const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.querySelector(".btn");
const colorBox = document.querySelector(".color-box");
const colorHex = document.querySelector(".color-hex");
let currentRotation = 0;
button.addEventListener("click", () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[rondomNumber()];
  }

  colorBox.style.backgroundColor = color;
  colorHex.textContent = color;
  rotateButton();
});

let rondomNumber = () => {
  return Math.floor(Math.random() * 15);
};
const rotateButton = () => {
  colorBox.style.transform = "rotate(360deg)";
  setTimeout(() => {
    colorBox.style.transform = "rotate(0deg)";
  }, 150);
};
