const display = document.querySelector(".display");

function inputclick(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function delDisplay() {
  if (display.value == "Error") {
    display.value = "";
  }
  display.value = display.value.toString().slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
