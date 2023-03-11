
/**
 * Example 1: Accessing Object Literal fields.
 */
const Example1 = () => 
{
    const person = {
        firstName : "Pete",
        age : 39
    }

    console.log(person.firstName)

    console.log(person['firstName']);
}

/**
 * Example 2: Conditional Logic with Object Literals.
 */
const Example2 = () => 
{
    let offer = "None";
    let time = 1200;

    const cafe = {
        cafeName : "Whitesheep",
        seatingCapacity : 100,
        hasSpecialOffers : true,
        drinks : [
            "Cappuccino",
            "Latte",
            "Filter Coffee",
            "Tea",
            "Hot Chocolate"
        ],
        breakfastOffer : "Free croissant with coffee.",
        lunchOffer : "Free drink with surprisingly priced sandwich.",
        noOffer : "Sorry, no offer." 
    }

    if (time < 1100) {
        offer = cafe.breakfastOffer;
    }
    else if (time < 1500) {
        offer = cafe.lunchOffer;
    }
    else {
        offer = cafe.noOffer;
    }

    console.log(offer);
}

/**
 * Example 3: Switching between Object Literal properties.
 */
const Example3 = () =>
{
    const alarm = {
        weekendAlarm : "No alarm set.",
        weekDayAlarm : "Get up at 7am"
    }

    const day = "Friday";

    switch (day) {
        case "Saturday":
        case "Sunday":
            console.log(`${day}:`, alarm.weekendAlarm);
            break;    
        default:
            console.log(alarm.weekDayAlarm);            
    }
}

/**
 * Example 4: Functions within Object Literals.
 */
const Example4 = () => 
{
    const cafe = {
        cafeName : "Whitesheep",
        seatingCapacity : 100,
        hasSpecialOffers : true,
        drinks : [
            "Cappuccino",
            "Latte",
            "Filter Coffee",
            "Tea",
            "Hot Chocolate"
        ],
        breakfastOffer : "Free croissant with coffee.",
        lunchOffer : "Free drink with surprisingly priced sandwich.",
        noOffer : "Sorry, no offer.",
        openCafe : () => "We are open, come on in!",
        closeCafe : () => "We are closed, come back tomorrow!"
    }

    console.log(cafe.openCafe());
    console.log(cafe.closeCafe());
}

/**
 * Example 5: Differences between function declarations, and function expressions.
 */
const Example5 = () => 
{
    const myObject = {

        stuff: "Things",

        functionDeclaration : function() {
            console.log(this.stuff); // "Things"
        },

        functionShorthandDeclaration() {
            console.log(this.stuff); // "Things"
        },

        functionExpression : () => {
            console.log(this.stuff); // "undefined"
        }
    }

    myObject.functionDeclaration(); // "Things"

    myObject.functionShorthandDeclaration(); // "Things"

    myObject.functionExpression(); // "undefined"
}

/**
 * Example 6: Using `this` within a function, in an Object Literal.
 */
const Example6 = () =>
{
    const cafe = {
        cafeName : "Whitesheep",
        seatingCapacity : 100,
        hasSpecialOffers : Math.random() > 0.5, // Coinflip true|false
        drinks : [
            "Cappuccino",
            "Latte",
            "Filter Coffee",
            "Tea",
            "Hot Chocolate"
        ],
        breakfastOffer : "Free croissant with coffee.",
        lunchOffer : "Free drink with surprisingly priced sandwich.",
        noOffer : "Sorry, no offer.",
        openCafe() {
            if (this.hasSpecialOffers) {
                return "We are open, and we have special offers available!";
            }
            else {
                return "We are open, come on in!";
            }
        },
        closeCafe : () => "We are closed, come back tomorrow!"
    }
    console.log(cafe.openCafe());
}

/**
 * Example 7: Arrays within Object Literals.
 */
const Example7 = () =>
{
    const person = {
        firstName: "Pete",
        age: 39,

        favouriteSongs: [
        "Bittersweet Symphony",
        "House of the Rising Sun",
        "Catch the Wind",
        "Ojitos Lindos"
        ]
    }

    person.favouriteSongs.forEach(film => console.log(film));
}