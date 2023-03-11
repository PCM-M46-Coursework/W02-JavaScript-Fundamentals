/**
 * Activity 2:
 * Create a variable for any pizza topping.
 * Create a switch statement:
 *  • If the topping is one of your favourite ingredients, log to the console: "These are important ingredients for my pizza." .
 *  • If you don’t mind having Pepperoni for example log to the console "I don’t mind having ${topping} on my pizza.".
 *  • Finally, for any topping you don’t like log "${topping} should not be on a pizza.".
 */
const Activity2 = topping => 
{
    // Arrange
    let message = '';
    
    // Act
    switch (topping) {
        case "Sweetcorn":
        case "Cheese":
        case "Tomato Sauce":
            message = `These are important ingredients for my pizza.`;
            break;
        case "Chicken":
            message = `I don't mind having ${topping} on my pizza.`;
            break;
        case "Anchovies":
            message = `${topping} should not be on a pizza.`;
            break;
        case "Pineapple":
            message = `I don't do memes.`;
            break;
        default:
            message = `I have no preference for ${topping}.`;
    }

    // Assert
    console.log("Topping:", topping);
    console.log(message);
}

Activity2("Sweetcorn");
Activity2("Chicken");
Activity2("Anchovies");
Activity2("Pineapple");
Activity2("Chocolate");