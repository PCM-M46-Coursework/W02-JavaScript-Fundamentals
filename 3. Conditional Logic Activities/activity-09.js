/**
 * Activity 9:
 * Create a variable called word that takes a string.
 * Create an if statement that checks if the last letter is the same as
 * the first. If it is return true, otherwise return false.
 */
const Activity9 = word =>
{
    word = word.toLowerCase();
    console.log(`First Letter: `, word.at(0));
    console.log(`Last Letter: `, word.at(-1));
    console.log(`Match: `, word.at(0) === word.at(-1));
    console.log();
}

Activity9("Bob");
Activity9("Kate");