/**
 * Activity 2:
 * Create a program that stores what you eat today for breakfast, lunch, and dinner.
 * Log these to the console.
 * 
 * Stretch:
 * Update each of these variables to what you will eat tomorrow. Log these to the console.
 */
const Activity2 = () =>
{
    // Arrange
    let breakfast = "Porridge";
    let lunch = "Ham and Cheese Sandwich";
    let dinner = "Chicken Kiev";

    // Act
    breakfast = "Muesli";
    lunch = "Egg and Bacon Butty";
    dinner = "Spaghetti Bolognese";

    // Assert
    console.log(breakfast);
    console.log(lunch);
    console.log(dinner);
}

Activity2();