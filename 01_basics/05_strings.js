const name = "Shakthi"
const repoCount = 5;

console.log(name + repoCount + "Values"); //Outdated syntax

console.log(`Hello this is ${name} and i have a total of ${repoCount} repos in my github`)

//Another way to initialize string
const myString = new String ("Shakthi-Aditya")

console.log(myString[0]); 
console.log(myString.__proto__);
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.charAt(3));
console.log(myString.indexOf('d'));

const newString = myString.substring(0,5);
console.log(newString);

const anotherString = myString.slice(-5,);
console.log(anotherString);

const str1 = "      russiaukraine   ";
const newTrimmedStr1 = str1.trim();
console.log(newTrimmedStr1)

const url = "https://microsoft.com/microsoft%store2005"

console.log(url.replace("%","--"));
console.log(url.includes("microsoft"));

console.log(myString.split("-"));