/**
 * Activity 7:
 * Create a variable called time, a variable called placeOfWork
 * and a variable called townOfHome. Create an if statement that
 * logs to the console where someone is at times of the day. E.g. if
 * the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.
 */
const Activity7 = (time, workPlace, homeTown) =>
{
    // Clamp
    time = Math.min(Math.max(time, 0), 23);

    if (time < 8 || time > 18)
    {
        console.log(`I'm at home, in ${homeTown}.`);
        return;
    }
    
    if (time >= 9 && time < 17)
    {
        console.log(`I'm at work, in ${workPlace}.`);
        return;
    }

    console.log(`I'm travelling ${time < 12 ? `to work, in ${workPlace}` : `back home, to ${homeTown}`}.`);    
}

Activity7(7, "Manchester", "Chester");
Activity7(8, "Manchester", "Chester");
Activity7(12, "Manchester", "Chester");
Activity7(18, "Manchester", "Chester");
Activity7(19, "Manchester", "Chester");