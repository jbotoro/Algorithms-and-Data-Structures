//Given a 2D board containing 'X' and 'O' (the letter O), capture all regions 
//surrounded by 'X'.

//A region is captured by flipping all 'O's into 'X's in that surrounded region.

//Example:

//X X X X
//X O O X
//X X O X
//X O X X
//After running your function, the board should be:

//X X X X
//X X X X
//X X X X
//X O X X
//Explanation:

//Surrounded regions shouldn’t be on the border, which means that any 'O' on the 
//border of the board are not flipped to 'X'. Any 'O' that is not on the border 
//and it is not connected to an 'O' on the border will be flipped to 'X'. Two 
//cells are connected if they are adjacent cells connected horizontally or 
//vertically.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const loop = modeFlag => {
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                if(board[i][j] !== 'X') {
                    process(modeFlag, i, j, board);
                }
            }
        }
        return modeFlag ? false : board;
    }
    return loop(loop(true));
};
const process = (mode, i, j, board) => {
    if(mode) {
        if(!i|| !j || i === board.length - 1 || j === board[0].length - 1) {
            traversal(board, i, j);
        }
    } else {
        board[i][j] === '#' ? board[i][j] = 'O' : board[i][j] = 'X'
    }
};
const traversal = (board, i, j) => {
    const validate = (row, col) => row >= 0 && col >= 0 && row < board.length && col < board[0].length;
    const directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];
    const dfs = (x, y) => {
        board[x][y] = '#';
        for(const [dx, dy] of directions) {
            const row = x + dx; 
            const col = y + dy;
            if(validate(row, col) && board[row][col] === 'O') {
                dfs(row, col);
            }
        }
    }
    dfs(i, j);
};