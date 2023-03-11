/**
 * Activity 5:
 * Create a variable, generate a random number between 1 and 30 six times,
 * each random number generated, check if this number of divisible by 7 or not.
 */
const Activity5 = () => {
    for (let i = 0; i < 6; i++) {
        const num = Math.ceil(Math.random() * 30);
        console.log(`Is ${num} divisible by 7:`, num % 7 === 0); 
    }
}

Activity5();