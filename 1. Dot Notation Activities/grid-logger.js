/**
 * Procedural implementation. Directly prints each string to the console. 
 */
const Procedural = () =>
{
    console.log("   |   |   ");
    console.log("   |   |   ");
    console.log("   |   |   ");
    console.log("-----------");
    console.log("   |   |   ");
    console.log("   |   |   ");
    console.log("   |   |   ");
    console.log("-----------");
    console.log("   |   |   ");
    console.log("   |   |   ");
    console.log("   |   |   ");
}

/**
 * Cached variables. Prints each variable to the console.
 */
const ProceduralUsingVariables = () =>
{
    const vertical = "   |   |   ";
    const horizontal = "-----------";
    
    console.log(vertical);
    console.log(vertical);
    console.log(vertical);
    console.log(horizontal);
    console.log(vertical);
    console.log(vertical);
    console.log(vertical);
    console.log(horizontal);
    console.log(vertical);
    console.log(vertical);
    console.log(vertical);
}

/**
 * Stretch Goal: Use arrays, and loops, to generate the grid.
 */
const IterativeUsingArraysAndLoops = () =>
{
    const strings = [
        "   |   |   ", 
        "-----------"
    ];
    
    const layout = [
        0, 0, 0, 
        1, 
        0, 0, 0, 
        1, 
        0, 0, 0
    ];

    layout.forEach(i => {
        console.log(strings[i]);
    });
}