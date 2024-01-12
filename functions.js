// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting() {
  return "Hi, nice to meet you.";
}
console.log(greeting());

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

var myName = "Toby";
function customGreeting() {
  return "Hello, " + myName + "." + " Great to finally meet you.";
}
console.log(customGreeting());

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson() {
  var firstName = "Benjamin";
  var middleName = "Michael";
  var lastName = "Wehrend";
  return "Hey there, " + firstName + " " + middleName + " " + lastName + ".";
}
console.log(greetPerson());

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

var num1 = 25;
function square(num1) {
  return num1 * num1;
}
console.log("The square is equal to: " + square(num1));

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(quantity, item) {
  var quantity = 4;
  var item = "Coffee";
  if (quantity === 4 && item === "Coffee") {
    return "Coffee is stocked.";
  }
  if (quantity === 3 && item === "Tortillas")
  return "Tortillas - running low.";
  if (quantity === 0 && item === "Cheese") {
    return "Cheese - OUT of stock!";
  }
  if (quantity === 1 && item === "Salsa") {
    return "Salsa - running LOW!";
  }
}
console.log(checkStock());
checkStock(4, "Coffee");
// => "Coffee is stocked"
checkStock(3, "Tortillas");
// => "Tortillas - running LOW"
checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"
checkStock(1, "Salsa");
// => "Salsa - running LOW"

