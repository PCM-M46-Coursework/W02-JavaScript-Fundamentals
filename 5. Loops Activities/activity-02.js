/**
 * Activity 2:
 * Generate 6 random numbers between 1-50.
 */
const Activity2 = () =>
{
    for (let i = 0; i < 6; i++) {
        const num = Math.ceil(Math.random() * 50);
        console.log("Random Number between 1 and 50:", num); 
    }
}

Activity2();