// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
var myName = "Ben";
function askForName() {
  console.log("Hello, what is your name? " + "Nice to meet you, " + myName);
}
//added myName var and second message to greet them by name. Otherwise it's simply a message asking for a name.
askForName();


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
}
//added console.log() so you can see the results. Otherwise, you can't be sure if correct. 
console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));



// EX 3:
//added extra console.log to make clear what's being done in console.log, not just code
//added numbered list for clarity, also function was func
function makeFreshPesto() {
  console.log("Step by step instructions for pesto:")
  console.log(
    "1. Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper.",
  );
  console.log("2. Pulse basil and pine nuts.");
  console.log("3. Add garlic and cheeses.");
  console.log("4. Slowly pour in oil.");
  console.log("5. Season.");
}

makeFreshPesto();


//  EX 4:
//defined num1 and num2 var
var num1 = 10;
var num2 = 6;
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;

  return avg;
}
// returns avg of num1 and num2 into console.log
console.log(average(num1, num2));
