/**
 * Activity 2:
 * Create an object called pet with the key values of name, typeOfPet, age, colour; and methods called eat, and drink.
 * They should return a string saying [Your Pet Name] is eating/drinking.
 */

const pet =
{
    name: "Pikachu",
    typeOfPet: "Pokemon",
    age: 10,
    colour: "Yellow",

    eat: function()
    {
        return `${this.name} is eating.`;
    },

    drink: function()
    {
        return `${this.name} is drinking.`;
    }
};

console.log(pet.eat());
console.log(pet.drink());