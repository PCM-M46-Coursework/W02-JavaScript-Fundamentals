// let      = mutable variable
// const    = immutable variable
// var      = mutable global scope variable
// NOTE: All `let` and `const` variables eventually get lowered to "var".

const thisiswhyitisimportanttowritevariablenamesincamelcase = false;
const beacuseThisIsMuchEasierToRead = true;

// -----

let firstName = "Pete";
let age = 39;
const favouriteDrink = "Hot Chocolate";

// String concatenation...
console.log("Hi, my name is " + firstName + ", I am " + age + " years old, and my favourite drink is " + favouriteDrink + ".");

firstName = "Fernanda";
age = 26;
// favouriteDrink = "Aguardiente"; // favouriteDrink is immutable, and cannot be changed.

// String interpolation...
console.log(`Hi, my name is ${firstName}, I am ${age} years old, and my favourite drink is ${favouriteDrink}.`);
