// funtions ()
// first class objects in js.
// can be passed as ref etc.

// functions are created using the nornal function keyword
// functions can also be created using the expression as follows;

const a = (x) => x*x;

console.log(a(4));


// callback fn

function fetchData(callback) {
    setTimeout(() => {
        const data = "Some data";
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log("Data received:", data);
});


// Named function
function sayHello() {
    console.log("Hello!");
}

// Anonymous function
const sayHello = function() {
    console.log("Hello!");
};



// SOME FUNCTIONS

// call()
// available on all js functions 
// it allows to invoke a function with a specific this context and arguments provided individually.
// 
function greet() {
    console.log("Hello, " + this.name);
}

const person = { name: "John" };

greet.call(person); // Output: Hello, John


// apply()
// similar to call but accepts the arguments in the form of an array
function greet(message) {
    console.log(message + ", " + this.name);
}

const person = { name: "John" };

greet.apply(person, ["Hello"]); // Output: Hello, John


// bind()
// this creates a new funtion with the specified this context without invoking the original funtion inplicitly.

function greet() {
    console.log("Hello, " + this.name);
}

const person = { name: "John" };
const greetPerson = greet.bind(person);

greetPerson(); // Output: Hello, John


// CLOSURES

// it is the combination of the funciton and the lexical environment in which the funtion was defined
// the environment consists of any local variables that were in scope at the closure was created.

function outerFunction() {
    const outerVar = "I'm from outerFunction";
  
    function innerFunction() {
        console.log(outerVar);
    }
  
    return innerFunction;
}

const closure = outerFunction();
closure(); // Output: I'm from outerFunction
