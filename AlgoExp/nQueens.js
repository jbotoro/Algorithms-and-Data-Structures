// The n-queens puzzle is the problem of placing n queens on an n×n chessboard 
//such that no two queens attack each other.



// Given an integer n, return all distinct solutions to the n-queens puzzle.

// Each solution contains a distinct board configuration of the n-queens' 
//placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

// Example:

// Input: 4
// Output: [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as 
//shown above.

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    placeQueens(result, n);
    return result;
};

function placeQueens(result, size, board = [], row = 0) {
    if (row === size) {
        buildResult(result, board, size);
        return;
    }
        
        for(let col = 0; col < size; col++) {
        if (checkValidPlace(board, row, col, size)) {
            board.push(col);
            placeQueens(result, size, board, row + 1);
            board.pop();
        }
        }
}

function checkValidPlace(board, row1, col1, size) {
    for( let row2 = 0; row2 < row1; row2++) {
        const col2 = board[row2];
        
        if (col1 === col2) {
        return false;
        }
        
        const colDistance = Math.abs(col1 - col2);
        const rowDistance = row1 - row2;
        
        if (colDistance === rowDistance) {
        return false;
        }
    }
    
    return true;
}

function buildResult(result, board, size) {
    const boardWithQueens = board.map(col => 
                        '.'.repeat(col) + 'Q' + '.'.repeat(size - col - 1)
                        )
    
    result.push(boardWithQueens);
}