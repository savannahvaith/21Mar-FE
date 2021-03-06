'use strict';
//? Objects - Key/Value pairs
//? container of relevant information

let carsLongWay = new Object(); 

let myObj = {}; // <-- Short hand

let savsCar = {
    "name":"Mercury", 
    "make" : "Mercedes", 
    "model": "c220d",
    "year": 2019, 
    "colour": "Grey"
}

const kevinsCar = {
    "make": "VW", 
    "name": "Sheila", 
    "model" : "Golf", 
    "year": 2012,
    "colour": "Grey"
}

console.log(kevinsCar["colour"]);
console.log(kevinsCar.colour);

// adding a property to kevins car
kevinsCar.engineSize = 3.5;
kevinsCar.make = "Beatle";

console.log(kevinsCar);

// enhanced for loop 
for(let attributes in kevinsCar){
    console.log(`Keys: ${attributes}`);
    console.log(`Value: ${kevinsCar[attributes]}`);
}

let garage = [savsCar, kevinsCar, {"make":"Audi", "model": "S5", "year": 2020, "colour":"black"}]

console.log(garage);

console.log("------");
// Normal for loop
for(let i=0; i<garage.length; i++){
    console.log(garage[i].make);
}
console.log("------");
// Enhanced for loop 
for(let car of garage){
    console.log(car["make"]);
}

console.log("------");
for(let i in garage){
    console.log(garage[i].make);
}

console.log("------");
// print all of the values in the object inside the array
for (let car of garage) { // LOOP THROUGH ARRAY
    console.log(car);
    for (let key in car) { // LOOP THROUGH OBJECT
        console.log(`Key: ${key} Value: ${car[key]}`);
    }
}

console.log(savsCar);
console.log(Object.values(savsCar)); 
console.log(Object.keys(savsCar)); 

const object1= {
    "object2": {
        "classroom": [
            {
                "name":"Savannah", 
                "dob": "19/05", 
                "location":"london"
            }, {
                "name": "Savannah",
                "dob": "19/05",
                "location": "london"
            }
        ]
    }, "fruits":["apple", "banana", "pineapple"]
};

console.log(object1);


// JSON JavaScript Object Notation
let myJSONObject = {
    "tesco":[ 
        {"productName": "7up", "price": 0.99, "quantity":5000},
        {"productName": "flowers", "price": 15.99, "quantity":5000},
        {"productName": "pepper", "price": 0.99, "quantity":500}
    ], 
    "carpark": [
        { "make": "VW", "name": "Sheila","model": "Golf","year": 2012,"colour": "Grey"}
    ]
}

// myJSONObject.carpark[1]= {
//     "name":"Mercury", 
//     "make" : "Mercedes", 
//     "model": "c220d",
//     "year": 2019, 
//     "colour": "Grey"
// }; 

myJSONObject.carpark.push({
    "name": "Mercury",
    "make": "Mercedes",
    "model": "c220d",
    "year": 2019,
    "colour": "Grey"
});

console.log(typeof myJSONObject);

let convertToString = JSON.stringify(myJSONObject);
console.log(convertToString);
console.log(typeof convertToString);

// convert from a string to an object seamlessly
let userData = `{"name":"Sav"}`;

console.log(typeof userData);
let convertToObject = JSON.parse(userData);

console.log(convertToObject);
console.log(typeof convertToObject);