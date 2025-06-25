const display = document.getElementById("display");

function appendValue(val) {
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function calculate() {
  try {
    const result = eval(display.innerText);
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}
//886356