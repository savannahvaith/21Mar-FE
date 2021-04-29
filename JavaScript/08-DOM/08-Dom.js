'use strict';
// # = ID
// . = CLASS
let monkey = document.querySelector("#monkey");
let div = document.querySelector(".addToMe");

monkey.setAttribute("alt","Cute monkey");
monkey.setAttribute("width", "200px");
monkey.setAttribute("height", "200px");
console.log(monkey);

let newHeading = document.createElement("h1");  // <h1></h1>
let text = document.createTextNode("We love JS!"); // we love JS

newHeading.appendChild(text); // <h1> we love JS </h1>

div.appendChild(newHeading);