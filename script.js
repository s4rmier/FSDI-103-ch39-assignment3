// meet assignment requirements
const getUserInput = () => {
  // step1: get input
  const firstNumber = Number(validateUserInput(`num1`));
  const secondNumber = Number(validateUserInput(`num2`));

  // step2: perform operations
  add(firstNumber, secondNumber);
  subtract(firstNumber, secondNumber);
  multiply(firstNumber, secondNumber);
  divide(firstNumber, secondNumber);

  // step3: send results to the DOM
  updateDOM();
};

//keyboard shortcut
document.addEventListener("keydown", function (event) {
  if (event.key === "F3" || event.keyCode === 114) {
    getUserInput();
  }
});

// perform 4 mathematical operations
const add = (x, y) => {
  return (sum = x + y);
};

const subtract = (x, y) => {
  return (difference = x - y);
};

const multiply = (x, y) => {
  return (product = x * y);
};

const divide = (x, y) => {
  return (quotient = x / y);
};

// validate userinput
let validateUserInput = (input) => {
  let userInput;
  let isValid = false;

  while (!isValid) {
    userInput =
      input === `num1`
        ? prompt("Enter first number: ")
        : prompt("Enter second number: ");
    if (!isNaN(userInput)) {
      isValid = true;
      return userInput;
    } else {
      alert("Please enter a valid number");
    }
  }
};

// update DOM for results

const updateDOM = () => {
  document.getElementById("product").textContent = product.toFixed(2);
  document.getElementById("quotient").textContent = quotient.toFixed(2);
  document.getElementById("sum").textContent = sum.toFixed(2);
  document.getElementById("difference").textContent = difference.toFixed(2);
};

// =================================================================================

// self-challenge
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let userInput = Number(event.target.textContent);
    console.log(userInput, typeof userInput); //for development purposes

    isNaN(userInput) ? console.log("Event A") : console.log("Event B"); //for development purposes
  });
});

// event A callback function

// event B callback function
