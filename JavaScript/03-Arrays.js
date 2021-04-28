'use strict';

// Arrays = Store information 
let array = Array(10); 
let arrayShortHand = []; // <-- Convention

console.log(array);
console.log(array[7]);

//? Access any index, at any time - no complaints, if it is empty <UNDEFINED>
//? Sparsely filled - any unassigned part is undefined
//? Resize at any time!

arrayShortHand[3] = "Audi A1";
console.log(arrayShortHand); //? [undefined, undefined, undefined, Audi A1]

let animals = [];
animals.length = 14;
animals[16] = "hello";

console.log(animals);

let classroom = []; 
classroom[0] = "Savannah";
classroom[1] = {"id":"QACTrainer", "room": "25B", "students": ["Jim","bob"]};
classroom[5] = null; 

// ADDS TO THE END OF THE ARRAY
classroom.push("Fruity");
classroom.push(undefined);
console.log(classroom);

// REMOVES FROM THE END OF THE ARRAY
classroom.pop();
console.log(classroom);

// ADD TO THE START OF THE ARRAY
classroom.unshift("some value");
console.log(classroom);

// REMOVE FROM THE START OF THE ARRAY
classroom.shift(); 
console.log(classroom);

// when will the .length ever be useful?

for(let i=0; i<classroom.length; i++){
    console.log(classroom[i]);
}

// enhanced for loop 
console.log("------------------");
for(let person of classroom){
    console.log(person);
}