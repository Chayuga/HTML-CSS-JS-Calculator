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

  // TODO: Clear display of result and start another calculation if symbol is not present
  if (result && !symbol) {
    display.innerText = "";
    firstValue = btnValue;
  }

  secondValue = "";
};

// Display the value of the button to the screen / display area.
for (let button of controlButtons) {
  button.addEventListener("click", () => {
    //   Destructure button and rename to btnValue.
    const { innerText: btnValue } = button;

    // Declare buttons with symbols value
    const btnValueIsSymbol = allSymbols.includes(btnValue);

    // Prevent the calculation if the secondValue is missing
    if (!secondValue && btnValue === "=") return null;

    // Create clear functionality, by assigning it to C
    if (btnValue === "C") {
      firstValue = secondValue = symbol = "";
      return (display.innerText = "");
    }

    // Conditional statement to detect button pressed
    if (firstValue && btnValueIsSymbol) {
      // If the secondValue exists do the cclculation
      secondValue && calculate();
      symbol = btnValue;
    } else if (!symbol) firstValue += btnValue;
    else if (symbol) secondValue += btnValue;

    if (btnValue !== "=") display.innerText += btnValue;
    // display.innerText = button.innerText;
  });
}
