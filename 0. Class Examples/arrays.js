/**
 * Example 1: Array creation and manipulation.
 */
const Example1 = () =>
{
    // Create a one-dimensional array.
    const coffeeOrder = [
        "Alex - Cortado",
        "Ben - Cortado",
        "Charlie - Whatever's New"
    ];
    
    // Set the value of the second item.
    // This shows the effect of zero-indexing.
    coffeeOrder[1] = "Ann - Vanilla Latte";
    
    // Add an item to the end of the array.
    coffeeOrder.push("Donna - Espresso");
    
    // Remove the last item from the array, and return it as a field.
    const item = coffeeOrder.pop();
    
    console.log(item);
    console.log(coffeeOrder[2]);
    console.log(coffeeOrder.length);
    console.log(coffeeOrder);
}