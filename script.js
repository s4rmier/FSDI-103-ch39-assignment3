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

// personal-challenge
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let userInput = event.target.textContent;
    // console.log(userInput, typeof userInput); //for development purposes

    isNaN(userInput) ? operationsHandler(userInput) : numHandler(userInput);
  });
});

// Variables for operations event
let numA = 0;
let numB = 0;
let operator;
let result;

let displayMain = document.getElementById("display-main");
let displayLog = document.getElementById("result-log");

// event A callback function
const operationsHandler = (input) => {
  switch (input) {
    case "*": {
      operator = "multiply";
      numA = displayMain.textContent;
      displayLog.innerHTML += `<li>${displayMain.textContent} ${input}</li>`;
      displayMain.textContent = "";
      break;
    }
    case "/": {
      operator = "divide";
      numA = displayMain.textContent;
      displayLog.innerHTML += `<li>${displayMain.textContent} ${input}</li>`;
      displayMain.textContent = "";
      break;
    }
    case "+": {
      operator = "add";
      numA = displayMain.textContent;
      displayLog.innerHTML += `<li>${displayMain.textContent} ${input}</li>`;
      displayMain.textContent = "";
      break;
    }
    case "-": {
      operator = "subtract";
      numA = displayMain.textContent;
      displayLog.innerHTML += `<li>${displayMain.textContent} ${input}</li>`;
      displayMain.textContent = "";
      break;
    }

    case "C": {
      displayLog.innerHTML = "";
      displayMain.textContent = "";
      numA = 0;
      numB = 0;
      operator = 0;
      break;
    }

    default: {
      numB = displayMain.textContent;
      displayLog.innerHTML += `<li>${displayMain.textContent}</li>`;
      switch (operator) {
        case "multiply": {
          result = Number(numA) * Number(numB);
          break;
        }
        case "divide": {
          result = Number(numA) / Number(numB);
          break;
        }
        case "add": {
          result = Number(numA) + Number(numB);
          break;
        }
        case "subtract": {
          result = Number(numA) - Number(numB);
          break;
        }
        default: {
          result = "invalid";
        }
      }
      displayLog.innerHTML += `<li><b>ANS: ${result}</b></li>`;
      displayMain.textContent = "";
      break;
    }
  }
  console.log(operator);
};

// event B callback function
const numHandler = (input) => {
  // console.log(input, "Trigger Event B");
  displayMain.textContent += input;
};
