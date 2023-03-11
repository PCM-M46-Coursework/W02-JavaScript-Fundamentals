/**
 * Activity 6:
 * Imagine you’re a programmer for a social media platform! 
 * You have been tasked with building a prototype for a mutual followers program.
 * 
 * > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. 
 * In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays.
 * 
 * > Using a nested loop iterate over both arrays and console.log out the matching follower.
 */
const Activity6 = () => {
    const bobsFollowers = ["John", "Paul", "George", "Ringo"];
    const hannahsFollowers = ["John", "Michael", "George", "Brian"];
  
    // for (let i = 0; i < bobsFollowers.length; i++) {
    //     for (let j = 0; j < hannahsFollowers.length; j++) {
    //         if (bobsFollowers[i] === hannahsFollowers[j]) {
    //             console.log(bobsFollowers[i])
    //         }
    //     }
    // }

    bobsFollowers.forEach(follower =>
    {       
        if (hannahsFollowers.includes(follower))
        {
            console.log(follower);
        }
    });
}

Activity6();