const display = document.querySelector(".display");

// Select all the buttons
const controlButtons = document.querySelector(".controls").children;

//Create variables for the symbols
const allSymbols = ["+", "-", "X", "/", "%", "C", "="];

// Create variable to hold values clicked
let firstValue = "";
let secondValue = "";
let symbol = "";

// Create a calculate function
const calculate = () => {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);

  if (symbol === "+") result = firstValue + secondValue;
  if (symbol === "-") result = firstValue - secondValue;
  if (symbol === "X") result = firstValue * secondValue;
  if (symbol === "/") result = firstValue / secondValue;
  if (symbol === "%") result = firstValue % secondValue;

  display.innerText = result;
  firstValue = result;
  secondValue = "";
};

// Display the value of the button to the screen / display area.
for (let button of controlButtons) {
  button.addEventListener("click", () => {
    //   Destructure button and rename to btnValue.
    const { innerText: btnValue } = button;

    // Declare buttons with symbols value
    const btnValueIsSymbol = allSymbols.includes(btnValue);

    // Conditional statement to detect button pressed
    if (firstValue && btnValueIsSymbol) {
      secondValue && calculate();
      symbol = btnValue;
    } else if (!symbol) firstValue += btnValue;
    else if (symbol) secondValue += btnValue;

    if (btnValue !== "=") display.innerText += btnValue;
    // display.innerText = button.innerText;
  });
}
