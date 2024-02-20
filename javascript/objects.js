// objects {}

// protorype based boject oriented programming language.
// supports funtional programming too

// PROTOTYPE

// prototype based programming ->
/*
in this type of programming the objects are the primary building block of the language, and new objects can be colned using the existing objects.
each object in this language has a link to another internal object called its prototype.
if a property you are searching is not present in the current object js searches that property in the prototype chain and keeps on searching until the property to be need is found out till it reaches the end of the prototype chain.
 */

// Define a prototype object
var animal = {
    sound: "Animal sound",
    makeSound: function() {
      console.log(this.sound);
    }
  };
  
  // Create a new object using the animal prototype
  var dog = Object.create(animal);
  dog.sound = "Woof!";
  
  // Now, dog inherits properties and methods from the animal prototype
  dog.makeSound(); // Output: Woof!
  
  // If we add a property directly to the dog object, it will override the prototype property
  dog.sound = "Bark!";
  dog.makeSound(); // Output: Bark!
  

// OBJECTS :
// creation  -> direct , using new keyword

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const person = new Object();
person.name = "John";
person.age = 30;
person.city = "New York";


// property access 
console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30


// modifying property
person.age = 35; // Modifying existing property
person.job = "Developer"; // Adding new property

// nesting 
const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        street: "123 Main St"
    }
};

console.log(person.address.city); // Output: New York

// functins inside the objects are called methods
const person = {
    name: "John",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet(); // Output: Hello, my name is John


// looping 
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// object destructuring
const { name, age } = person;
console.log(name, age); // Output: John 30


// property exists?
console.log("name" in person); // Output: true
console.log(person.hasOwnProperty("job")); // Output: false


// CONSTRUCTOR FUNCTIONS

/**
 * special fn to create similar multiple objects of same properties and methods.
 * they serve as the blueprint for creating objects of with certain properties.
 * 
 */

// how to define 

function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("John", 30);
const person2 = new Person("Alice", 25);

Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};


// prototype based inheritance

function Animal(name) {
    this.name = name;
}

Animal.prototype.sound = function() {
    console.log(this.name + " makes a sound");
};

const dog = new Animal("Dog");
const cat = new Animal("Cat");

dog.sound(); // Output: Dog makes a sound
cat.sound(); // Output: Cat makes a sound
