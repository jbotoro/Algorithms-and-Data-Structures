// In a N x N grid composed of 1 x 1 squares, each 1 x 1 square consists of a /, \, or blank space.  These characters divide the square into contiguous regions.

// (Note that backslash characters are escaped, so a \ is represented as "\\".)

// Return the number of regions.

 

// Example 1:

// Input:
// [
//   " /",
//   "/ "
// ]
// Output: 2
// Explanation: The 2x2 grid is as follows:

// Example 2:

// Input:
// [
//   " /",
//   "  "
// ]
// Output: 1
// Explanation: The 2x2 grid is as follows:

// Example 3:

// Input:
// [
//   "\\/",
//   "/\\"
// ]
// Output: 4
// Explanation: (Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.)
// The 2x2 grid is as follows:

// Example 4:

// Input:
// [
//   "/\\",
//   "\\/"
// ]
// Output: 5
// Explanation: (Recall that because \ characters are escaped, "/\\" refers to /\, and "\\/" refers to \/.)
// The 2x2 grid is as follows:

// Example 5:

// Input:
// [
//   "//",
//   "/ "
// ]
// Output: 3
// Explanation: The 2x2 grid is as follows:

 

// Note:

// 1 <= grid.length == grid[0].length <= 30
// grid[i][j] is either '/', '\', or ' '.

function regionsBySlashes(grid) {
    let mapped = new Array(grid.length * 3).fill().map(row => new Array(grid[0].length * 3).fill(0));
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '/') {
            mapped[i * 3][j * 3 + 2] = 1;
            mapped[i * 3 + 1][j * 3 + 1] = 1;
            mapped[i * 3 + 2][j * 3] = 1;
        }
        if (grid[i][j] === '\\') {
            mapped[i * 3][j * 3] = 1;
            mapped[i * 3 + 1][j * 3 + 1] = 1;
            mapped[i * 3 + 2][j * 3 + 2] = 1;

        }
        
        }
    }
    let count = 0;
    for (let i = 0; i < mapped.length; i++) {
        for (let j = 0; j < mapped[0].length; j++) {
        if (!mapped[i][j]) {
            count++;
            expand(i, j, mapped);
        }
        }
    }
    return count;
};

function expand(i, j, mapped) {
    let q = [[i, j]];
    mapped[i][j] = 1;
    while (q.length) {
        let [x, y] = q.shift();
        [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]].forEach(([newX, newY]) => {
        if (newX >= 0 && newY >= 0 && newX < mapped.length && newY < mapped[0].length && !mapped[newX][newY]) {
            mapped[newX][newY] = 1
            q.push([newX, newY]);
        }
        });
    }
}