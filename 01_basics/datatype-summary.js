// Primitive Datatypes
    // 7 types(copy of the variable is given while changing)
        // String,Number, Boolean,null, undefined, Symbol, BigInt


// const id = Symbol('231');
// const anotherId = Symbol('231');

// console.log(id);
// console.log(anotherId);
// console.log(id===anotherId);

// //BigInt
// const num = 12345789n;
// console.log(typeof num);


// // Reference type( Non Primitive)
//     //Arrays, Objects, Functions

// const students = ["shakthi", "Aditya","Jitesh"];

// console.log(typeof students);

// const friend = {
//     name : "thiruma",
//     age : 22,
//     place : "Chennai"
// }

// const myFunction = function () {
//     console.log("Hello World");
// }

// console.log(typeof myFunction);

// let a = null;
//console.log(typeof a) // typeof null will be an object


//----------------------------------------------------

// Stack memory (Primitive) => Given copy of the memory
// Heap memory (Non-Primitive) => Given the reference of the variable

let x = "Shakthi";
let y = x;
y = "Aditya"
console.log(x);
console.log(y);

let studentOne = {
    name : "arun",
    age : 22
}

let studentTwo = studentOne;
studentOne.age = 19;
console.log(studentOne);
console.log(studentTwo);
