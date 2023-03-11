/**
 * Activity 2:
 * Edit the below snippet to include two parameters and a running order count updated when the function is called:
 * 
 * let orderCount = 0;
 * const takeOrder = (topping) =>
 * {
 *      console.log(`Pizza, with ${topping1}.`);
 *      orderCount++;
 * }
 */
const Activity2 = () =>
{
    let orderCount = 0;
    const takeOrder = (topping1, topping2) =>
    {
        console.log(`Pizza, with ${topping1} and ${topping2}.`);
        orderCount++;
    }

    console.log("Orders:", orderCount);
    takeOrder("Chicken", "Sweetcorn")
    console.log("Orders:", orderCount);
    takeOrder("Chicken", "Mushroom");
    console.log("Orders:", orderCount);
}

Activity2();