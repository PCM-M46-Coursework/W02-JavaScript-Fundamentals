/**
 * Activity 1:
 * Create a program that stores someone’s name, age, and favourite colour.
 * Log it to the console, in a complete sentence using Template Literals.
 * 
 * Stretch:
 * Update all of your variables and write out a new sentence underneath your original.
 */
const Activity1 = () =>
{
    // Arrange
    let name = "Pete";
    let age = 39;
    let favouriteColour = "Burgandy";

    const originalSentence = `My name is ${name}. I am ${age} years old. My favourite colour is ${favouriteColour}.`;

    // Act
    name = "Lea";
    age = 26;
    favouriteColour = "Red";

    const stretchSentence = `Someone else's name is ${name}. They are ${age} years old. Their favourite colour is ${favouriteColour}.`;

    // Assert
    console.log(originalSentence);
    console.log(stretchSentence);
}

Activity1();