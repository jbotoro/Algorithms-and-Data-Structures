//# 1 Longest Substring without Repeating Characters

//Given a string, find the length of the longest substring without repeating characters.

//Example 1:

//Input: "abcabcbb"
//Output: 3 
//Explanation: The answer is "abc", with the length of 3. 

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    const map = {};
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}

//#2 Number of Islands

//Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
//An island is surrounded by water and is formed by connecting adjacent lands 
//horizontally or vertically. You may assume all four edges of the grid are all 
//surrounded by water.

//Example 1:

//Input:
//11110
//11010
//11000
//00000

//Output: 1

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    
    function depthSearch(x, y) {
        if (grid[x][y] === '1') {
            grid[x][y] = '0';
        } else {
            return;
        }

        if (x < grid.length - 1) {
            depthSearch(x+1, y);
        }
        
        if (y < grid[x].length - 1) {
            depthSearch(x, y+1);
        }
        
        if (x > 0 && x < grid.length) {
            depthSearch(x-1, y);
        }
        
        if (y > 0 && y < grid[x].length) {
            depthSearch(x, y-1);
        }
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                depthSearch(i, j);
            }
        }
    }
    
    return count;
};

