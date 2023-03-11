/**
 * Activity 3:
 * If we can create a loop to put 0-9 on the screen, how can we count from 9-0?
 */
const Activity3 = () =>
{
    let forwards = "Forwards: ";
    let backwards = "Backwards: ";

    for (let i = 0; i < 10; i++) forwards += i;
    for (let i = 9; i >= 0; i--) backwards += i;

    console.log(forwards);
    console.log(backwards);
}

Activity3();