// var x = 100;
// console.log(x);

// hoisting is the process where the variables and functions declarations
// VARIABLE AND FUNCTION DECLARATIONS 
// are moved to the top of their containing scope during the compilation phase 
// Imp : only declarations are hoisted not their initialisations.

// before exec the code is scanned and the variable and function declarations are hoisted to their respective scopes.

// scope is def by { // content}

//eg 

foo(); // Output: "Hello, World!"

function foo() {
    console.log("Hello, World!");
}

// only function declaration is hoisted not their assignment.

bar(); // Output: TypeError: bar is not a function

var bar = function() {
    console.log("Hello, World!");
};


// most of the things like -> var,const,let, function, class are hoisted.
