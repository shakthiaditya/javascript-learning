const myArray = [1,2,3,4,5];
// console.log(myArray[2]);

// console.log(myArray.includes(6));

// const myArr2 = new Array (10,20,30,40,50);


// Array methods

// myArray.push(6);
// myArray.push(7);
// myArray.pop();

// myArray.unshift(0);
// console.log(myArray);
// myArray.shift();
// console.log(myArray);

// console.log(myArray.includes(7));
// console.log(myArray.indexOf(7));

const newArray = myArray.join();   //newArray will be a string separated by commas   

// console.log(myArray);
// console.log(newArray);

//slice, splice

console.log("A", myArray);

const myNewArray = myArray.slice(1,3);

console.log(myNewArray);

console.log("B", myArray);

const myNewArray2 = myArray.splice(1,3); //Values at index 1,2,3 are removed from the original array itself

console.log(myNewArray2);
console.log("C", myArray);