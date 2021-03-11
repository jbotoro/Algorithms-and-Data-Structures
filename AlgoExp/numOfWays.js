// You have a grid of size n x 3 and you want to paint each cell of the grid with exactly one of the three colors: Red, Yellow, or Green while making sure that no two adjacent cells have the same color (i.e., no two cells that share vertical or horizontal sides have the same color).

// Given n the number of rows of the grid, return the number of ways you can paint this grid. As the answer may grow large, the answer must be computed modulo 109 + 7.

 

// Example 1:


// Input: n = 1
// Output: 12
// Explanation: There are 12 possible way to paint the grid as shown.
// Example 2:

// Input: n = 2
// Output: 54
// Example 3:

// Input: n = 3
// Output: 246
// Example 4:

// Input: n = 7
// Output: 106494
// Example 5:

// Input: n = 5000
// Output: 30228214
 

// Constraints:

// n == grid.length
// grid[i].length == 3
// 1 <= n <= 5000

const numOfWays = n => {
    // initial line
    let colors3 = 6
    let colors2 = 6
    let next2, next3 // minimize ram use
    
    // start after initial line
    for (let i = 2; i <= n; i++) {
        // using temporary variables to have access to previous colors2 and colors3 totals
        
        // each line adds 3x more 2 color versions from 2 colors and 2x of 2 color versions from 3 colors 
        next2 = 3 * colors2 + 2 * colors3
        // each line adds 2x more 3 color versions from 2 colors and 2x of 3 color versions from 3 colors 
        next3 = 2 * colors2 + 2 * colors3
        // correcting for overflow for some reason
        colors2 = next2 % 1000000007
        colors3 = next3 % 1000000007
    }  
    // result is just all 2 color and 3 color combinations
    // correcting for overflow for some reason
    return (colors3 + colors2) % 1000000007
}