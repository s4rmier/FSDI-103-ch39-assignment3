// meet assignment requirements
const getUserInput = () => {
  // step1: get input
  const firstNumber = Number(validateUserInput(`num1`));
  const secondNumber = Number(validateUserInput(`num2`));

  // step2: perform operations
  console.log(add(firstNumber, secondNumber).toFixed(2));
  console.log(subtract(firstNumber, secondNumber).toFixed(2));
  console.log(multiply(firstNumber, secondNumber).toFixed(2));
  console.log(divide(firstNumber, secondNumber).toFixed(2));

  // step3: send results to the DOM
  updateDOM();
};
// perform 4 different mathematical operations
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
  document.getElementById("product").textContent = product;
  document.getElementById("quotient").textContent = quotient;
  document.getElementById("sum").textContent = sum;
  document.getElementById("difference").textContent = difference;
};

// ======================================================================================================================================

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
