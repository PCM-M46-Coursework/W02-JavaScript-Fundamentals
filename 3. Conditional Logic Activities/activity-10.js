/**
 * Activity 10:
 * Create two variables called num1 and num2.
 * Create an if statement that checks if the result of the sum is even. 
 * If true, return the number, 
 * Else return the numbers multiplied together.
 */
const Activity10 = (i, j) =>
{
    // Immediately Invoked Function Expression (IIFE)
    // NOTE: This avoids calculating the sum twice.
    const value = ((sum, product) => sum % 2 === 0 ? sum : product)(i + j, i * j);
    console.log(value);
}

Activity10(2, 2); // 4
Activity10(2, 3); // 6