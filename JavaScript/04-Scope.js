'use strict';
// SCOPE - Visibility of a variable in a file/project

const someFunction = () => {
    let hello = `Billy bob joe`; // variable has got LOCAL scope
    console.log(`${hello} called from the function`);
}

someFunction();
// console.log(hello);

// if a variable doesn't exist in a file and we try to access it 
// it will create one AS A VAR and hoist!

// if it does exist in the file, it will use that variable


let check = false;

const changeCheck = () => {
    check = true; 
}

console.log(check); //? False
changeCheck();  
console.log(check); //? True


let change = false;

const changeMe = () => {
    let minion = true; // LOCAL SCOPE
    console.log(minion); // True
}

console.log(change); //? False
changeMe(); 
console.log(change); //? False


// we look within before going else where!
console.log("------------------");
let flag; 
const test = () => {
    flag = true; 
    console.log(flag); //T
    test1(); 
    console.log(flag); //F
}


const test1 = () => {
    flag = false; 
    return;
}

test();

//? True, false x5

console.log("----------");
let x; 
const anotherOne = () => {
    x = true; // GLOBAL SCOPE
    console.log(x); // True
    anotherOneAgain(); 
    console.log(x); // TRUE
}

const anotherOneAgain = () => {
    let x = false; //LOCAL SCOPE
    return ;
}

anotherOne(); 

//? True True x6
//? True False


if(true){
    let y = "hello"; 
}
// console.log(y);

let bankBalance = 100; 

const deposit = (bankBalance) => {
    bankBalance += 50;
    console.log(bankBalance); //150
}

deposit(bankBalance);
console.log(bankBalance); // 100 