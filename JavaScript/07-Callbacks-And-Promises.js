'use strict';

// Callback = function that takes in another function as a parameter

const greeting = (firstName) =>{
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
    {"name":"Bob", "grade":8, "gender":"M"},
    {"name":"Molly", "grade":12, "gender":"F"},
    {"name":"Jim", "grade":34, "gender":"M"},
    {"name":"Poppy", "grade":8, "gender":"F"},
    {"name":"Bob", "grade":56, "gender":"M"},
    {"name":"Bob", "grade":33, "gender":"M"},
    {"name":"Bob", "grade":12, "gender":"M"},
    {"name":"Billy", "grade":8, "gender":"F"},
    {"name":"Mary", "grade":8, "gender":"F"},
    {"name":"Poppins", "grade":8, "gender":"F"},
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

// let prompom = new Promise()