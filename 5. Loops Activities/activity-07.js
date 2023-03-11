/**
 * Activity 7:
 * Research on do...while loop, find out about the difference between for loop, while loop and do...while loop.
 * Give an example of each. What are the pros and cons?
 */
const Activity7 = () => {

    // A for loop will run for a specified number of iterations, with a user-definable index value given to each iteration.
    
    // Pros: Very user-definable. Good for iterating over sets, with a static size.
    // Cons: "The index is outside the bounds of the array.". It can be easy to fall off the end of arrays, if not careful.

    for (let i = 0; i < 3; i++) {
        console.log("For loop iteration index:", i);        
    }

    // A while loop will check its condition before each iteration, and will continue to run until the run condition returns false.

    // Pros: Hugely flexible in terms of run conditioning. Good for iterating over sets of an unknown size.
    // Cons: Can create an infinite loop, if not careful.

    let numbers = [9, 8, 7];
    while (numbers.length > 0) {
        console.log("While loop value:", numbers.shift()); 
    }

    // A do...while loop will check its condition after each iteration, and will continue to run until the run condition returns false. 
    
    // Pros: It is guaranteed to run at least once.
    // Cons: It is guaranteed to run at least once.

    let shouldRun = false;
    do {
        console.log("Condition set to: ", shouldRun);
        console.log("In a while loop, you wouldn't be able to read this.")
    } while(shouldRun);
}

Activity7();