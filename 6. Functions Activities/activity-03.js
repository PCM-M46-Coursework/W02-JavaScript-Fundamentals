/**
 * Activity 3:
 * Cash machine time! Let’s create one that:
 * > Dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you’re trying to withdraw!
 */

/**
 * Represents a PIN protected customer account, with options to deposit, and withdraw funds.
 * 
 * @class Account
 */
class Account {

    // Private Fields.
    #_pin;
    #_balance;

    /**
     * Initialises a new instance of the {Account} class, with a given PIN. Initial balance is set to 0.
     * 
     * @param {number} pin - The PIN to set for the account.
     * @memberof Account
     */
    constructor(pin)
    {
        this.#_pin = pin;
        this.#_balance = 0.00;
    }

    /**
     * Initialises a new instance of the {Account} class, with a given PIN. Initial balance is set to 0.
     * 
     * @static
     * @param {number} pin - The PIN to set for the account.
     * @returns {Account} A newly created instance of type {Account}.
     * @memberof Account
     */
    static Create = pin => new Account(pin);

    /**
     * Deposits a given amount into the account.
     * 
     * @param {number} amount - The amount of money to desposit into the account. 
     * @memberof Account
     */
    Deposit(amount)
    {
        console.log("Depositing: £", this.#_balance += amount); 
    }   

    /**
     * Withdraws a given amount from the account, so long as the correct 
     * PIN is entered, and there are sufficient funds within the account.
     * 
     * @param {number} pin 
     * @param {number} val 
     * @memberof Account
     */
    Withdraw(pin, val)
    {
        if (this.#_pin !== pin)
        {
            console.log("Cannot withdraw funds. Wrong PIN.");
            return;
        }
        if (this.#_balance < val)
        {
            console.log("Not enough funds in the account.");
            return;
        }
        this.#_balance -= val;
    }

    /**
     * Prints the current balance of the account to the console.
     * 
     * @memberof Account
     */
    PrintStatement = () => console.log("Account Balance: £", this.#_balance);
}

const Activity3 = () =>
{
    const account = Account.Create(1234);
    account.Deposit(100);
    account.PrintStatement();
    account.Withdraw(1235, 70);
    account.PrintStatement();
    account.Withdraw(1234, 70);
    account.PrintStatement();
    account.Withdraw(1234, 70);
    account.PrintStatement();
}

Activity3();