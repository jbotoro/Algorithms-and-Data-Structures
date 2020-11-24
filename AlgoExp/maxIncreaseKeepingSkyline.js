
// In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

// At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

// What is the maximum total sum that the height of the buildings can be increased?

// Example:
// Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
// Output: 35
// Explanation: 
// The grid is:
// [ [3, 0, 8, 4], 
//   [2, 4, 5, 7],
//   [9, 2, 6, 3],
//   [0, 3, 1, 0] ]

// The skyline viewed from top or bottom is: [9, 4, 8, 7]
// The skyline viewed from left or right is: [8, 7, 9, 3]

// The grid after increasing the height of buildings without affecting skylines is:

// gridNew = [ [8, 4, 8, 7],
//             [7, 4, 7, 7],
//             [9, 4, 8, 7],
//             [3, 3, 3, 3] ]

// Notes:

// 1 < grid.length = grid[0].length <= 50.
// All heights grid[i][j] are in the range [0, 100].
// All buildings in grid[i][j] occupy the entire grid cell: that is, they are a 1 x 1 x grid[i][j] rectangular prism.

/**
To maximize the height while maintaining the height of the skyline from the view of the top/botttom and right/left:
    GOAL: At every A[row][col] we need to find the max of that row, column, and then make the current A[i][j] = the minimum of the two, as long as it's greater than the current value
    1) Make a nested for loop to go though each value and find the max col and rows
        - We will store this in a map/object for fast access.
    2) Go though the whole 2D array, find the Min(max of that col, max of that row) and replace the current Array[row][col]!
    3) Pet a dog for happiness   
*/
var maxIncreaseKeepingSkyline = function(grid) {
    let rowM = {} //Map for the rows max
    let colsM = {} //Map for the columns max
    let sum = 0 // Total height we can add
    
    //findMaxRowsCols will go though each row and col and populate the max of each row
    // and colum in a key: value way.
    //From the example, after this function runs the map looks like:
    //console.log(rowM) => { '0': 8, '1': 7, '2': 9, '3': 3 }
    //console.log(colsM)=> { '0': 9, '1': 4, '2': 8, '3': 7 }
    findMaxRowsCols(grid, rowM, colsM)
    
    //Now that we have the max of a given row and column, let's see how much we can replace each cell by
    for(let row = 0; row < grid.length; row ++){
        for(let col = 0; col < grid[0].length; col ++){
            //The new height should be the MIN of the max of a given row and column (so we dont ruine the skyline;)
            let newH = Math.min(rowM[row], colsM[col])
            //If the current height is smaller do the replacement and count! (saves us some uneeded work)
            if(grid[row][col] < newH){
                sum += newH -grid[row][col]
                grid[row][col] = newH
            }
        }
    }
    return sum
};


var findMaxRowsCols = function(grid, rowM, colsM){
    //Find the max of each row
    for(let row = 0; row < grid.length; row ++){
        let max = 0
        for(let curr = 0; curr < grid[0].length; curr ++){
            if(grid[row][curr] > max){
                max = grid[row][curr] 
            }
            rowM[row] = max
        }
    }
    
    //Find the max for each column
    for(let col = 0; col < grid.length; col ++){
        let max = 0
        for(let curr = 0; curr < grid.length; curr ++){
            if(grid[curr][col] > max){
                max = grid[curr][col]
            }
            colsM[col] = max
        }
    }
 
}
};