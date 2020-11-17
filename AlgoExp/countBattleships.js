// Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
// You receive a valid board, made of only battleships or empty slots.
// Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
// At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
// Example:
// X..X
// ...X
// ...X
// In the above board there are 2 battleships.
// Invalid Example:
// ...X
// XXXX
// ...X
// This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
// Follow up:
// Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?

const isShipStart = (board, row, col) => {
    return board[row][col] === 'X'
        && (row === 0 || board[row - 1][col] !== 'X')
        && (col === 0 || board[row][col - 1] !== 'X')
};

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    return board.reduce((count, row, rowIndex) => {
        const shipStartsInRow = row
            .reduce((count, col, colIndex) => {
                const isStart = isShipStart(board, rowIndex, colIndex);
                return count + (isStart ? 1 : 0);
            }, 0);
        return count + shipStartsInRow;
    }, 0);
};