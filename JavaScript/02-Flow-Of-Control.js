// Check for equality 

let bool1 = true; //? boolean
let bool2 = true; 
let one = 1;  //? number

// Checks the VALUE
console.log(bool1 == bool2); //? TRUE
console.log(bool1 == one); //? TRUE

// Strict Equality = Check the VALUE and TYPE
console.log(bool1 === one); //? FALSE

let variable; 
let variable2 = null; 

console.log(variable == variable2); //?  TRUE
console.log(variable === variable2); //? FALSE 

// Check the VALUE
console.log(1 == "1"); //? TRUE
console.log(1 != "1"); //? FALSE

// Check the VALUE AND TYPE
console.log(1 === "1"); //? FALSE
console.log(1 !== "1"); //? TRUE

// Iterator
let x = 1; 
console.log(x++); //? 1
console.log(x); //? 2

let y = 1; 

console.log(++y); //? 2

console.log("-------------");
for(let i=0; i<5; i++){
    console.log(i);
}
console.log("-------------");

for (let i = 0; i <= 3; i++){
    console.log(`i = ${i++}`);
}

// for( [initialexpression]; [condition]; iterator){
    
// }

// do while => Will run atleast once before checking a condition

let canIRun = false; 
do{
    console.log("I ran atleast once");
}while(canIRun);

//while loop => Check the condition first, then if its :( wont run

let pups = 0; 
let enough = false; 
while(enough){
    console.log("A puppyyy!");
    pups++;
}

// Switch => evaluates a expression, then finds matching case

let now = new Date();
console.log(now.getDay());

switch(now.getDay()){
    case 0:
        console.log(`sunday`);
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`Weekday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    default:
        console.log(`Who knowssss`);
        break;
}

let greeting = `good`;

if(now.getHours() > 17){
    greeting += ` evening`;
}else{
    greeting += ` morning`;
}

console.log(greeting); //? Good Morning 

// Ternary Statement
// syntax: (condition) ? valueIfTrue : valueIfFalse
let greeting2 = (now.getHours() > 17) ? `Good Evening` : `Good Morning`;

console.log(`Welcome Savannah, how are you today, ${now.getTime()} , someone says ${greeting2} `);
console.log("Welcome Savannah, how are you today," + now.getTime() + "someone says" + greeting2);
