// using properties and methods of Dom to access particular elements within the website
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const operator = document.getElementById("mathematicalOperator");
const result = document.getElementById("result");
const submit = document.getElementById("submit");

// Attaching an event listener to the submit button which will work when it is clicked and calculate function will work
submit.addEventListener("click", calculate);

// Calculates the result of the mathematical operations with error handling enabled
function calculate(event) {
  // To stop the reloading of the page this method is used
  event.preventDefault();

  // Converting first and second numbers from string to integers
  const first = parseInt(firstNumber.value);
  const second = parseInt(secondNumber.value);
  const op = operator.value;

  // Result variable to store the end result
  let res = 0;

  // Checking whether both the numbers are entered
  if (isNaN(first) || isNaN(second)) {
    result.textContent = "Please enter valid numbers";
    return;
  }

  // Checking divide by zero case
  if (op === "/" && second === 0) {
    result.textContent = "Cannot divide by zero";
    return;
  }

  // Using a switch based approach to perform operations based on the operator selected
  switch (op) {
    case "+":
      res = first + second;
      break;
    case "-":
      res = first - second;
      break;
    case "*":
      res = first * second;
      break;
    case "/":
      res = first / second;
      break;
    default:
      result.textContent = "Invalid operator";
      return;
  }

  // Storing the result back to the result container
  result.textContent = res;
}
