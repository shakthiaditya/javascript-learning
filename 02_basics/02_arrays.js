const marvel= ["thor","spiderman","ironman"];
const dc = ["superman","flash","batman"];

// marvel.push(dc);             //pushes the entire array as a single element
// console.log(marvel);

const allHeroes = marvel.concat(dc);        // Return new all the values in a new Array
console.log(allHeroes);

const allNewHeroes = [...marvel, ...dc];    //Spread operator => Can merge more than 2 arrays (unlike concat)
console.log(allNewHeroes);

const arr1 = [1,2,3,4,[5,6,7],[8,9,[10,11,12]],13,14];
const anotherArray = arr1.flat(Infinity);
console.log(arr1);
console.log(anotherArray);

console.log(Array.isArray("shakthi"));
console.log(Array.from("shakthi"));     //Converted "shakthi" into an array (Works only for iterables)
console.log(Array.from({name : "aditya", age : 22 }));     //Interesting case of empty array returning

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Works for non-iterables also
