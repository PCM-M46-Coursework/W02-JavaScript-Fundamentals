/**
 * Activity 1:
 * Create an array of your favourite songs. 3 of them.
 * Log them to the console.
 * 
 * Stretch:
 * Add 2 more using a method.
 * Then remove the last one.
 */
const Activity1 = () =>
{
    let songs = [
        "Bittersweet Symphony",
        "House of the Rising Sun",
        "Catch the Wind"
    ];

    songs.push(
        "Ojitos Lindos",
        "Levan Polka");

    songs.pop();

    songs.forEach(film => console.log(film));
}

Activity1();