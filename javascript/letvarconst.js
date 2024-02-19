// var -> global scoped - hoisted

function sum(){
    if(10>5){
        var a = 5;
    }
    console.log(a); // prints 5 even if it is inside the if block;
}

sum();

// let -> blocked scope

function example() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
}

// const - block but no commits once defined
// but vals to arrays or obj can be modified.
function example() {
    const x = 10;
    // x = 20; // This will throw an error
    const y = { name: 'John' };
    y.name = 'Jane'; // This is valid
    console.log(y); // Output: { name: 'Jane' }
}

