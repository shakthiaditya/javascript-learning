// Primitive Datatypes
    // 7 types(copy of the variable is given while changing)
        // String,Number, Boolean,null, undefined, Symbol, BigInt


const id = Symbol('231');
const anotherId = Symbol('231');

console.log(id);
console.log(anotherId);
console.log(id===anotherId);

//BigInt
const num = 12345789n;
console.log(typeof num);


// Reference type( Non Primitive)
    //Arrays, Objects, Functions

const students = ["shakthi", "Aditya","Jitesh"];

console.log(typeof students);

const friend = {
    name : "thiruma",
    age : 22,
    place : "Chennai"
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof myFunction);

let a = null;
console.log(typeof a) // typeof null will be an object