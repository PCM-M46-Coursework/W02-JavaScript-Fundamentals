/**
 * Activity 3:
 * Create a variable called password.
 * Check how many letters are in the password, if there are
 * less than 8, log to the console that the password is too
 * short. Otherwise log the password to the console.
 */
const Activity3 = password => console.log(`${ password.length < 8 ? "Password is too short." : password }\n`);

Activity3("1234567");
Activity3("12345678");