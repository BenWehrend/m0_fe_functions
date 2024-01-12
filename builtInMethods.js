// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
//includes() method is called on string "Hello World"
//No arguments passed; includes() has one job to check if "Hello" exists in "Hello World" 
//return value is true

"Hello World".endsWith("Hello");
//endsWith() method is called on "Hello World" string
//No arguments passed; has one job to check if "Hello World" string ends with "Hello"
//return value is false

"Hello World".endsWith("rld");
//endsWith() method is called on "Hello World" string
//No arguments passed; has one job to check if "Hello World" string ends with "rld"
//return value is true


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

//vars declared
var testString1 = "Testing, testing, 1, 2, 3";
var testString2 = "Is this thing on?";
//toLowerCase () method called on testString1
//No arguments passed; toLowerCase() has one job to lowercase all letters that exist in the String  
//return value is "testing, testing, 1, 2, 3"
console.log(testString1.toLowerCase());
//endsWith() method called on testString2
//No arguments passed; has one job to check if "Is this thing on?" string ends with "on?"
console.log(testString2.endsWith("on?"));

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

//defines var firstNames/lastNames
var firstNames = ["Rachel" , " Robert" , " Rick"];
var lastNames = ["Smith" , " Jackson" , " Brown"];
//startsWith() function called on all elements in array stored in firstNames[]
//startsWith method is true if "Rachel", "Robert", and "Rick" start with "R"
//returns value is therefore true
var nameIncludes = firstNames[0].startsWith("R");
console.log(nameIncludes);
//.length function is called on all items in array nameLength
//.length determines if nameLength[] elements are greater than 7 characters in length
//return value is therefore false
var nameLength = lastNames[0].length > 7;
console.log(nameLength);
