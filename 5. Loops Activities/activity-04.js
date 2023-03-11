/**
 * Activity 4:
 * Displays 4 films stored in an array.
 * Use a for loop to show each film in the array.
 * Use an if statement to check if the 3rd film in the array is Ghostbusters.
 * If it is, return "Yay it’s Ghostbusters". 
 * If it isn’t return "Boo! we want Ghostbusters!"
 */
const Activity4 = isPresent => {
    
    let films = [
        "The Crow",
        "A Knight's Tale",
        `${isPresent ? "Ghostbusters" : "Cruel Intentions"}`,
        "Lord of the Rings"
    ];

    console.log(films[2] === "Ghostbusters"
        ? "Yay it's Ghostbusters"
        : "Boo! We want Ghostbusters!");
}

Activity4(false);
Activity4(true);