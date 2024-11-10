const display = document.getElementById("display");
const percent = document.getElementById("btn-percent");
const pmBtn = document.getElementById("pm-btn");
//press enter and the numbers in textbox will calculate
display.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    calculate();
  }
});

//turn number to decimal percent
percent.addEventListener("click", () => {
  let percentage = parseFloat(display.value) / 100;
  display.value = percentage;
});

pmBtn.addEventListener("click", () => {
  if (display.value >= "0") {
    display.value = "-" + display.value;
  } else {
    display.value = display.value.substring(1);
  }
});

//display in textbox
function showDisplay(input) {
  display.value += input;
}

//clear display
function clearDisplay() {
  display.value = "";
}

//calculate the values in text box
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}