/**
 * Activity 1:
 * Create a variable called age. Write an if statement that logs “Yes I can serve you” 
 * if the age is greater than 17 and else logs “You aren’t old enough”.
 * 
 * Stretch:
 * Take your if statement and add a variable called country in.
 * Eg. if age > 17 and country == “UK”.
 */
const Activity1 = (age, country) => 
{
    // Arrange
    const DrinkingAge = country => {
        switch(country)
        {
            case "Palestine":
                return 16;
            case "Iceland":
            case "Lithuania":
                return 20;
            case "Samoa":
            case "USA":
                return 21;
            default:
                return 18;
        }
    }
    
    // Act
    const result = age > DrinkingAge(country) 
        ? "Yes I can serve you." 
        : "You aren't old enough.";
    
    // Assert
    console.log("Age:", age);
    console.log("Country:", country);
    console.log(result);
}

Activity1(17, "Palestine");
Activity1(17, "UK");
Activity1(18, "UK");
Activity1(18, "USA");