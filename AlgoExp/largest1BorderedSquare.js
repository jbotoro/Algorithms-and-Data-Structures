// Given a 2D grid of 0s and 1s, return the number of elements in the largest square subgrid that has all 1s on its border, or 0 if such a subgrid doesn't exist in the grid.

 

// Example 1:

// Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
// Output: 9
// Example 2:

// Input: grid = [[1,1,0,0]]
// Output: 1
 

// Constraints:

// 1 <= grid.length <= 100
// 1 <= grid[0].length <= 100
// grid[i][j] is 0 or 1

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
    const y = grid.length;
    const x = grid[0].length;
    const max = y > x ? x : y;

    for (var i = 0; i < max; i++) {
        const size = max - i;
        for (var j = 0; j < y - size + 1; j++) {
        const startY = j;
        for (var k = 0; k < x - size + 1; k++) {
            const startX = k;
            if (checkGrid(startX, startY, size)) {
            return size * size;
            }
        }
        }
    }
    return 0;

    function checkGrid(startX, startY, size) {
        for (var i = 0; i < size; i++) {
        // console.log(startX, startY, size, i);
        if(grid[startY][startX + i] === 0) {
            return false;
        }
        if(grid[startY + i][startX] === 0) {
            return false;
        }
        if(grid[startY + size - 1][startX + i] === 0) {
            return false;
        }
        if(grid[startY + i][startX + size - 1] === 0) {
            return false;
        }
        }
        return true;
    }
};