//Activity 1:
//Take this code and turn it into arrow function syntax:

function factorial_orginal(n)
{
    if ((n === 0) || (n === 1)) {
        return 1;        
    } else {
        return (n * factorial (n-1));
    }
}

/**
 * Calculates the factorial of a given value.
 * 
 * @param {number} n - The number to determine the factorial of.
 * @returns {number} - The factorial value of n.
 */
const factorial = n => (n === 0) || (n === 1) ? 1 : n * factorial(n - 1);

console.log(factorial(5)); // 120