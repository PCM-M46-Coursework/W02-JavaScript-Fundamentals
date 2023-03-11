/**
 * Activity 5:
 * Create a variable called num.
 * If it's divisible by 3 log "Fizz" to the console.
 * If it’s divisible by 5 log "Buzz" to the console.
 * If it’s divisible by both 3 and 5 log "FizzBuzz" to the console.
 * Otherwise log the number to the console.
 */
const Activity5 = num =>
{
    // Arrange
    let str = [];

    // Act
    if (num % 3 === 0) str.push("Fizz");
    if (num % 5 === 0) str.push("Buzz");
    const result = str.length == 0 ? num : str.join('');

    // Assert
    console.log(result);
}

Activity5(3);
Activity5(4);
Activity5(5);
Activity5(15);