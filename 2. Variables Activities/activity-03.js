/**
 * Activity 3:
 * Create a program that calculates the number of days from today to your birth date.
 */
const Activity3 = () =>
{
    // Arrange
    const millisecondsInOneDay = 1000 * 60 * 60 * 24;

    // Act
    const dateOfBirth = new Date(1983, 10, 04);
    const diff = Date.now() - dateOfBirth;
    const days = Math.floor(diff / millisecondsInOneDay);

    // Assert
    console.log(`There have been ${days} days since ${dateOfBirth.toDateString()}.`);
}

Activity3();