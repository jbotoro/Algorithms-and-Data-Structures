
// A Tic-Tac-Toe board is given as a string array board. Return True if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.

// The board is a 3 x 3 array, and consists of characters " ", "X", and "O".  The " " character represents an empty square.

// Here are the rules of Tic-Tac-Toe:

// Players take turns placing characters into empty squares (" ").
// The first player always places "X" characters, while the second player always places "O" characters.
// "X" and "O" characters are always placed into empty squares, never filled ones.
// The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.
// Example 1:
// Input: board = ["O  ", "   ", "   "]
// Output: false
// Explanation: The first player always plays "X".

// Example 2:
// Input: board = ["XOX", " X ", "   "]
// Output: false
// Explanation: Players take turns making moves.

// Example 3:
// Input: board = ["XXX", "   ", "OOO"]
// Output: false

// Example 4:
// Input: board = ["XOX", "O O", "XOX"]
// Output: true
// Note:

// board is a length-3 array of strings, where each string board[i] has length 3.
// Each board[i][j] is a character in the set {" ", "X", "O"}.

In order for the board to be in a valid state we need to check:

players did the correct amount of moves (equal amount or player X did one move more)
we have at most one winner (game ends when someone crossed the line). Please notice, that it is possible to cross 2 lines by the last move as well
the last move was done by the winner (game ends when someone crossed the line)
/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
    return checkMoves(board) && checkWinner(board);
};

function checkMoves(board) {
    const [x, o] = countMoves(board);
    const diff = x - o;
    return diff === 0 || diff === 1;
}

function countMoves(board) {
    let x = 0;
    let o = 0;
    
    for (let row of board) {
        for (let char of row) {
        if (char === 'X') {
            x++;
            continue;
        }
        
        if (char === 'O') {
            o++;
            continue;
        }
        }
    }
    
    return [x, o];
}

const winPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    
    [0, 4, 8],
    [2, 4, 6],
];

function getMove(board, coord) {
    const row = Math.floor(coord / 3);
    const col = coord % 3;
    
    return board[row][col];
}

function isWinner(board, coords) {
    const firstMove = getMove(board, coords[0]);
    
    if (firstMove === ' ') {
        return false;
    }
    
    return coords.every(coord => getMove(board, coord) === firstMove);
}

/**
 * it is possible to have:
 * - no winner
 * - one winner
 * - two winners, but same player
 *
 * Important:
 * Last move should be done by the winner
 *
 * Note: 
 * having more than 2 winners is not possible, since it would require
 * more than 5 moves to be done by a player. That is checked by `checkMoves`
 */
function checkWinner(board) {
    let wins = 0;
    
    const winners = winPositions.filter(position => isWinner(board, position));
    const length = winners.length;
    
    // no winner - fine
    if (length === 0) {
        return true;
    }
    
    const winnerMove = getMove(board, winners[0][0]);
    
    if (!checkLastMove(board, winnerMove)) {
        return false;
    }
    
    // one winner - all good
    if (length < 2) {
        return true;
    }
    
    // two winners. check its same player
    return winnerMove === getMove(board, winners[1][0]);
}

// check that the last move was done by the winner
function checkLastMove(board, winnerMove) {
    const [x, o] = countMoves(board);
    
    if (winnerMove === 'X') {
        return x > o;
    }
    
    return x === o;
}