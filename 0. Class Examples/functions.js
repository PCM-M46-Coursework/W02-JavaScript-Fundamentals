/**
 * Example 1: `My First Function`™
 */
const Example1 = () =>
{
    const pressGrindBeans = () => 
        console.log("I need coffee to feel human!");

    pressGrindBeans();
}

/**
 * Example 2: Conditional logic within functions.
 */
const Example2 = () =>
{
    let coffeeIsGrinding = false;

    const pressGrindBeans = () =>
    {
        if (coffeeIsGrinding)
        {
            console.log("Coffee's ready!");
            coffeeIsGrinding = false;
            return;
        }
        console.log("Let's get the coffee ready...");
        coffeeIsGrinding = true;
        
    }

    pressGrindBeans();
    pressGrindBeans();
}

/**
 * Example 3: Functions with parameters.
 */
const Example3 = () =>
{
    let accountNumber = 50449921;

    const cashWithdrawal = (amount, account) =>
    {
        console.log(`Withdrawing ${amount} from ${account}`);
    }

    cashWithdrawal(300, accountNumber);
    cashWithdrawal(30, accountNumber);
    cashWithdrawal(200, 50447921);
}

/**
 * Example 4: Returning values from functions.
 */
const Example4 = () =>
{
    const addUp = (n1, n2) => n1 + n2;

    addUp(7, 3);
    console.log(addUp(2, 5));
}

/**
 * Example 5: Chaining functions.
 */
const Example5 = () =>
{
    const multiplyByNineFifths = c => c * (9 / 5);

    const getFahrenheight = c => multiplyByNineFifths(c) + 32;

    console.log(`The temperature is ${getFahrenheight(15)}°F`);
}

/**
 * Example 6: Function declarations and expressions.
 */
const Example6 = () =>
{
    function functionDeclaration()
    {
        console.log("This is a function declaration.");
    }

    const functionExpression = function()
    {
        console.log("This is a function expression.");
    }

    functionDeclaration();
    functionExpression();
}