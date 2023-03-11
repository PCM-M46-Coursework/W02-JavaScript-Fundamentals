/**
 * Activity 4:
 * Create 9 variables: space1, space2... space9.
 * Assign either the value ‘x’,’o’,’ ‘, to each of these variables.
 * Insert the variables into your board using the ${varName}
 * syntax and make it look like the displayed board. 
 */
const Activity4 = () =>
{
    // Arrange
    const space1 = 'X';
    const space2 = 'O';
    const space3 = ' ';
    const space4 = 'X';
    const space5 = 'X';
    const space6 = ' ';
    const space7 = 'O';
    const space8 = ' ';
    const space9 = ' ';

    const grid = [];

    // Act
    for (let y = 0; y < 11; y++)
    {
        switch (y) {
            case 1:
                grid.push(` ${space1} | ${space2} | ${space3} `);
                break;
            case 3:
            case 7:
                grid.push("------------");
                break;
            case 5:
                grid.push(` ${space4} | ${space5} | ${space6} `);
                break;
            case 9:
                grid.push(` ${space7} | ${space8} | ${space9} `);
                break;    
            default:
                grid.push("   |   |   ");
        }
    }

    // Assert
    grid.forEach(line => console.log(line));
}

Activity4();