/**
 * Activity 1:
 * Create an array that lists your favourite films, up to 5 elements.
 * Add 2 more using a method.
 * Use a loop to cycle through the array
 */
const Activity1 = () =>
{
    let films = [
        "The Crow",
        "A Knight's Tale",
        "Cruel Intentions",
        "Lord of the Rings",
        "The Hobbit"
    ];

    films.push(
        "Oceans 11", 
        "Catch Me if You Can!");

    films.forEach(film => console.log(film));
}

Activity1();