/**
 * Activity 1:
 * Let’s edit our person object to include...
 * A function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”
 */

const person =
{
    firstName: "Pete",
    age: 39,
    
    sayHiDeclaration: function()
    {
        return `Hello, my name is ${this.firstName}.`;
    },
    
    sayHiShortDeclaration()
    {
        return `Hello, my name is ${this.firstName}.`;
    },
    
    sayHiExpression: () =>
    {
        return `Hello, my name is ${this.firstName}.`;
    }
}

/*
    In this object literal, there are two different functions that both aim to return a greeting
    message that includes the person's name.

    The first function, `sayHiDeclaration`, is defined using the traditional function declaration
    syntax. This syntax creates a function that has its own `this` context that is bound to the
    object on which it is called. In this case, `this` refers to the `person` object. Therefore, when
    the `sayHiDeclaration` function is called on the `person` object, it returns the string 
    `"Hello, my name is Pete."` which is assigned to the messageFromDeclaration variable.

*/
const messageFromDeclaration = person.sayHiDeclaration(); // Pete
console.log(messageFromDeclaration);

const messageFromShortDeclaration = person.sayHiDeclaration(); // Pete
console.log(messageFromShortDeclaration);

/*
    The second function, `sayHiExpression`, is defined using an arrow function expression. Arrow
    functions, unlike traditional functions, do not create their own `this` context. Instead, `this`
    is lexically bound to the enclosing execution context. In this case, the enclosing execution
    context is the global object, not the `person` object. Therefore, when the `sayHiExpression`
    function is called on the `person` object, this refers to the global object, not the `person`
    object, resulting in the `undefined` value being returned and assigned to the
    `messageFromExpression` variable.
*/
const messageFromExpression = person.sayHiExpression(); // Undefined
console.log(messageFromExpression);

/*
    We can "trick" program to give a value, by adding the value to the "prototype" of the global
    Object. This will add a `firstName` field to EVERY Object we create.
*/

Object.prototype.firstName = "Paul";
messageFromExpression = person.sayHiExpression(); // Paul
console.log(messageFromExpression);