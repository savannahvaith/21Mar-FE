'use strict';

add(2,3);

// Function declaration = HOISTS
function add(a,b){
    console.log(a+b);
}

// hello(); - Will give you runtime error!

// Function Expression
const hello = function(){
    console.log("Whats up");
}
hello();

// Arrow function 
// Syntax: const <name> = () => doSometingInReturn

const hello2 = () => console.log("How cool is this");

hello2();

const multiLine = () => {
    console.log("Line 1");
    console.log("Line 2");
    console.log("Line 3");
    console.log("Line 4");
};

multiLine();

const addition = (a,b) => a+b; 
const subtraction = (a,b) => a-b;
const multiplication = (a,b) => a*b; 

console.log(addition(2,3));