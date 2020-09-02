// In a 2D grid of 0s and 1s, we change at most one 0 to a 1.

// After, what is the size of the largest island? (An island is a 4-directionally 
//connected group of 1s).

// Example 1:

// Input: [[1, 0], [0, 1]]
// Output: 3
// Explanation: Change one 0 to 1 and connect two 1s, then we get an island with 
//area = 3.
// Example 2:

// Input: [[1, 1], [1, 0]]
// Output: 4
// Explanation: Change the 0 to 1 and make the island bigger, only one island 
//with area = 4.
// Example 3:

// Input: [[1, 1], [1, 1]]
// Output: 4
// Explanation: Can't change any 0 to 1, only one island with area = 4.
 

// Notes:

// 1 <= grid.length = grid[0].length <= 50.
// 0 <= grid[i][j] <= 1.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    return searchLargest(paintIsland(grid));
};
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

const validate = (row, col, grid) => row >= 0 && col >= 0 && row < grid.length && col < grid[0].length;

const paintIsland = grid => {
    const islandMap = new Map();
    let label = 2, area = 0;
    const dfs = (x, y) => {
        area++;
        grid[x][y] = label; // paint the island to a new number
        for(const [dx, dy] of dir) {
            const row = x + dx;
            const col = y + dy;
            if(validate(row, col, grid) && grid[row][col] === 1) {
                dfs(row, col);
            }
        }
    }
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) { 
                dfs(i, j);
                islandMap.set(label, area);
                area = 0;
                label++;
            }
        }
    }
    return [grid, islandMap];
}

const searchLargest = ([grid, map]) => {
    let res = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 0) {
                let area = 1;
                const seen = new Set();
                for(const [di, dj] of dir) {
                    if(!validate(i + di, j + dj, grid)) continue;
                    const curr = grid[i + di][j + dj];
                    if(map.has(curr) && !seen.has(curr)) {
                        area += map.get(curr);
                        seen.add(curr);
                    }
                }
                res = Math.max(area, res);
            }
        }
    }
    return res ? res : grid.length * grid[0].length;
}