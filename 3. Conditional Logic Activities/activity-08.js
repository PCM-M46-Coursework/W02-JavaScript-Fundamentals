/**
 * Activity 8:
 * Take the string "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi".
 * Find the index of a last vowel in the string.
 */
const Activity8 = str =>
{
    let index = -1;

    ['a', 'e', 'i', 'o', 'u'].forEach(c => {
        index = Math.max(index, str.lastIndexOf(c))
    });

    if (index === -1)
    {
        console.log("There are no vowels in the string.");
        return;
    }

    console.log(`Last Index (${str[index]}): `, index)
}

Activity8("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi");