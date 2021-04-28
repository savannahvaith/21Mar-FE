
// let/const
let fname = "Savannah"; // LET = A value we can change 
const VALUE = "Doesn't change"; // CONST = Something that doesn't change!

console.log(fname);
console.log(VALUE);

// VALUE = "Jim bob"; // cannot do this! 

// JAVA = 
// int, string, boolean, float, double, long, array, object,
// null, 

let firstName = "Harry"; 
let age = 25; 
let salary = 32578.78;
let siblings = ["Lisa", 23, false, "hello"];
let bool = false; 
firstName = "Harry Pawter";

// typeof = return "datatype"
console.log(firstName);
console.log(typeof firstName); //?  STRING
console.log(typeof age); //? NO "INT" only NUMBER
console.log(typeof salary); //? Number
console.log(typeof siblings); //? Array/Object
console.log(typeof bool); //? Boolean

// Accessing Array:
console.log(siblings[1]); // referenceVariable[indexposition]
console.log(siblings[50]); // undefined, null

// undefined = a reference that doesn't have a value; 
let lamarr; // no initialisation at declaration
console.log(lamarr);

// null = nothing, value to represent nothing, 
let nothing = null;  // explicitly saying you're empty

console.log(typeof lamarr); // ? undefined
console.log(nothing); // ? null 

// JS DATA TYPES:
// * Number
// * String
// * Object
// * Array
// * null
// * undefined

// String concatenation

let str = "5 + 3 = "; // string
let val = 5+3; // 8
let str2 = str + val;
console.log(str2); 
// console.log("5 + 3 = " + val);
//? 5 + 3 = 8

// template literal 
console.log(`5 + 3 = ${val}`);
// ' ' - Single quotes
// " " - Double quotes
// ` ` - Back Ticks

console.log(`Mr Speaker said: "Hello" `);
