/**
 * Activity 3:
 * Create an object called coffeeShop with key values of: 
 * branch, drinks with prices, food with prices, and methods called drinksOrdered and foodOrdered.
 * They should return a string saying [Your order] is ... with all items chosen with costs and total costs.
 */

const coffeeShop = 
{
    branch: 'Costa',
    drinks: [
        {
            name: 'Espresso',
            price: 2
        },
        {
            name: 'Double Espresso',
            price: 3
        }
    ],
    food: [
        {
            name: 'Chocolate Brownie',
            price: 2
        },
        {
            name: 'Flapjack',
            price: 2.50
        }
    ],

    printStatement: function(orderType)
    {
        const order = this[orderType];

        let receipt = `Your ${orderType} order is:\n\n`;        
        let total = 0;

        for (let item of order)
        {
            receipt += ` - ${item.name}: £${item.price}\n`;
            total += item.price;
        }

        receipt += `\nTotal: £${total}`;
        return receipt;
    },

    drinksOrdered: function()
    {
        return this.printStatement("drinks");
    },

    foodOrdered: function()
    {
        return this.printStatement("food");
    }
}

console.log(coffeeShop.drinksOrdered(), '\n');
console.log(coffeeShop.foodOrdered(), '\n');