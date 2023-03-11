/**
 * Activity 2:
 * Using MDN choose one of the following methods: 
 * 
 * map(), shift(), unshift(), splice(), slice(). 
 * 
 * Create a program to demonstrate the use of the method. 
 * 
 * (Note: Not all methods would permanently update/make changes to the arrays themselves.)
 */
const Activity2 = () =>
{
    const numbers = [1, 3, 5, 7, 9];

    // Map
    // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    const numbersTimesTwo = numbers.map(x => x * 2);
    console.log("Original Array:", numbers);
    console.log("Mapped f(2x):", numbersTimesTwo);

    // Shift
    // The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
    const firstNumber = numbers.shift();
    console.log("Before Shift:", numbers);
    console.log("Shifted Item:", firstNumber);
    console.log("After Shift:", numbers);

    // Unshift
    // The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
    numbers.unshift(1);
    console.log("After Unshift:", numbers);

    // Splice
    // The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    // To access part of an array without modifying it, see slice().
    numbers.splice(1, 0, 2);
    console.log("After Splice (Add):", numbers);
    numbers.splice(1, 1);
    console.log("After Splice (Remove):", numbers);

    // Slice
    // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
    // where start and end represent the index of items in that array. The original array will not be modified. 
    const slice = numbers.slice(1, -1);
    console.log("Slice:", slice);
}

Activity2();