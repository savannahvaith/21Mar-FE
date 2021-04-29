'use strict';

// Callback = function that takes in another function as a parameter

const greeting = (firstName) => {
    // creating a pop up with someones name printed inside
    alert(`Hello ${firstName}`);
}

const writeSomething = (function1) => {
    // creating a input box, that takes the users name
    let username = prompt("Please enter your name");
    function1(username); // greeting(username);
}

// writeSomething(greeting);

// Higher order functions

let grades = [
    { "name": "Bob", "grade": 8, "gender": "M" },
    { "name": "Molly", "grade": 12, "gender": "F" },
    { "name": "Jim", "grade": 34, "gender": "M" },
    { "name": "Poppy", "grade": 8, "gender": "F" },
    { "name": "Bob", "grade": 56, "gender": "M" },
    { "name": "Bob", "grade": 33, "gender": "M" },
    { "name": "Bob", "grade": 12, "gender": "M" },
    { "name": "Billy", "grade": 8, "gender": "F" },
    { "name": "Mary", "grade": 8, "gender": "F" },
    { "name": "Poppins", "grade": 8, "gender": "F" },
]

// The average grade of the classroom 
// The average grade of the boys
// The average grade of the girls
// Highest score for girls
// Highest score for boys

let isBoy = (student) => student.gender === "M";
let isGirl = (student) => student.gender === "F";

let getBoys = (grades) => grades.filter(isBoy);
let getGirls = (grades) => grades.filter(isGirl);

console.log(getBoys(grades));
console.log(getGirls(grades));

// Average method






// Commitment - something you said you were giong to do 
// fulfill it, break it, pending/forget

/*
A promise is a palceholder for some data, 
available immediately, some time in the future, 
possibly not at all 
*/

const hello = () => { }; //<- named function
() => { }; //<- annonymous function

let prompom = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve("Successful yay!"); // successful outcome
    } else {
        reject("error oh no :( "); // failed outcome
    }
});

// if success .then() we want do something
// else if rejected .catch()

// prompom.then( () => {
//     console.log("Yay we executed with no errors");
// }).catch( (msg) => {
//     console.error(`Something went terribly wrong! ${msg}`);
// });

// order of execution goes:
// prompom.then(() => {
//     console.log("This will execute for a RESOLVE() method");
// }).catch((msg) => {
//     console.error(`This will execute for a REJECT() method`);
// }).then(() => {
//     console.log(`I will execute, regardless of the outcome ^`);
// });

let newPromise = new Promise( (resolve, reject) => {
    // complicated logic
    console.log(`initial`);
    resolve(); 
    // reject(); // unreachable code
}).then( () => {
    console.log(`Do this`);
}).then( () => {
    throw new Error("Something has failed"); 
    console.log(`Straight after`);
}).catch( () => {
    console.log(`oh noooo`);
})

//? initial, do this, straight after

//? initial, oh no 

//? initial, do this, oh no 