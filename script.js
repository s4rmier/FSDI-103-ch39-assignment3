const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let userInput = Number(event.target.textContent);
    console.log(userInput, typeof userInput); //for development purposes
  });
});
