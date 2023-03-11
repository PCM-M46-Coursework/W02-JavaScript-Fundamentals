/**
 * Activity 4:
 * Create a variable called num.
 * Check if the variable is divisible by 3 or 5.
 * If it is, log “This number is divisible by 3 or 5”.
 * Otherwise log something else.
 */
const Activity4 = num =>
{
    if (num % 3 == 0 || num % 5 == 0)
    {
        console.log("This number is divisible by 3 or 5.");
        return;
    }
    console.log("This number is NOT divisible by 3 or 5.");
}

Activity4(3);
Activity4(4);
Activity4(5);