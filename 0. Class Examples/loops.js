/**
 * Example 1: Make an array of your 3 favourite drinks and log each one to the console.
 */
const Example1 = () =>
{
    const drinks = [
        "Colombian Coffee",
        "Hot Chocolate",
        "Lemon Juice"
    ];

    for (let i = 0; i < drinks.length; i++) {
        const drink = drinks[i];
        console.log(drink);
    }
}

/**
 * Example 2: Iterating sequentially across a number line.
 */
const Example2 = () =>
{
    let multiplesOfTwo = [];
    
    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) multiplesOfTwo.push(i);
    }

    console.log(`Numbers divisable by 2, between 0 and 20, are: ${multiplesOfTwo.join(", ")}`);
}

/**
 * Example 3: While loops.
 */
const Example3 = () =>
{
    let age = 15;

    while (age < 18)
    {
        console.log("You're a child.");
        age++;
    }

    console.log("You're an adult!");
}

/**
 * Example 4: While loop with random stop criteria.
 */
const Example4 = () =>
{
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    let currentCard = "Club";

    while(currentCard != "Diamonds")
    {
        console.log(currentCard);
        currentCard = suits[Math.floor(Math.random() * 4)];
    }
    
    console.log(currentCard);
}