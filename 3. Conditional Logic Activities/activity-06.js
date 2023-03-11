/**
 * Activity 6:
 * Create a variable called num.
 * Check if the number is a palindrome (looks the
 * same forward as it does backwards e.g. 1001 or
 * 20202).
 */
const Activity6 = num =>
{
    const numReversed = num
        .toString()
        .split('')
        .reverse()
        .join('');

    console.log(`Is ${num} a Pallindrome:`, num == numReversed);
}

Activity6(1001);
Activity6(1010);