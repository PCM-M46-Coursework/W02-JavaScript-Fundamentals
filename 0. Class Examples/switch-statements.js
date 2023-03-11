/**
 * Example 1: Refactoring a complex "if" statement, as a switch.
 * 
 * NOTE: This is important for Object Calisthenics, whereby one of the guiding principles is to
 * never use the `else` keyword, anywhere in your code.
 * 
 * Guideline: Don't Use the ELSE Keyword
 * 
 * This principle is by far the easiest to apply on a daily basis and is as simple as using early
 * returns to avoid else statements. The else statement is a common concept in many programming
 * languages, and most of the time, we see a complex nested conditional statement. It's easier to
 * just add another instead of refactoring all that logic. Using early returns and avoiding the
 * else keyword can help you create more readable code.
 * 
 * See: https://blog.avenuecode.com/object-calisthenics-principles-for-better-object-oriented-code
 * 
 * However, switch statements are only the first step. You still break the SOLID Open/Closed principle.
 * Further refactoring can be done to make the code more accessible, and scalable.
 */
const Example1 = () =>
{
  const car = "Peugeot";

  if (car == "Ford" || car == "GM") {
    console.log("You've got an American car!");
  } else if (car == "Peugeot" || car == "Citroen") {
    console.log("You've got a French car!");
  } else if (car == "Honda" || car == "Toyota" || car == "Suzuki") {
    console.log("You've got a Japanese car!");
  } else if (car == "Mercedes") {
    console.log("You've got a posh German car!");
  } else if (car == "Volkswagen") {
    console.log("You've got a German car!");
  } else if (car == "Hyundai" || car == "Kia") {
    console.log("You've got an South Korean car!");
  } else {
    console.log("Your car isn't made by one of the top ten companies in the world!");
  }

  // BECOMES

  switch (car) {
    case "Ford":
    case "GM":
        console.log("You've got an American car!");
      break;
    case "Peugeot":
    case "Citroen":
        console.log("You've got a French car!");
      break;
    case "Honda":
    case "Toyota":
    case "Suzuki":
        console.log("You've got a Japanese car!");
      break;
    case "Mercedes":
        console.log("You've got a posh German car!");
      break;
    case "Volkswagen":
        console.log("You've got a German car!");
      break;
    case "Hyundai":
    case "Kia":
        console.log("You've got an South Korean car!");
      break;
    default:
        console.log("Your car isn't made by one of the top ten companies in the world!");
  }
};

/**
 * Example 2: Creating a rudimentary switch expression.
 */
const Example2 = () => 
{
    const grade = Math.ceil(Math.random() * 100);
    const message = (() => { switch(true) {
        case grade >= 70: return "Distinction";
        case grade >= 60: return "Merit";
        case grade >= 50: return "Pass";
        default: return "Failed";
      }
    })();
    console.log(`Grade: ${grade} (${message})`);
};

// The equivilent in C#:

// private void Example2()
// {
//     var grade = System.Random.Shared.Next(1, 100);
//     var message = grade switch
//     {
//       >= 70 => "Distinction",
//       >= 60 => "Merit",
//       >= 50 => "Pass",
//       _ => "Fail"
//     };
//     Console.WriteLine($"Grade: {grade} ({message})");
// }