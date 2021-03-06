//Given a 2D board and a word, find if the word exists in the grid.

//The word can be constructed from letters of sequentially adjacent cell, 
//where "adjacent" cells are those horizontally or vertically neighboring. 
//The same letter cell may not be used more than once.

//Example:

//board =
//[
//  ['A','B','C','E'],
//  ['S','F','C','S'],
//  ['A','D','E','E']
//]

//Given word = "ABCCED", return true.
//Given word = "SEE", return true.
//Given word = "ABCB", return false.

var exist = function(board, word) {
    const ROW_NUM = board.length, COL_NUM = board[0].length;
    
    function callDFS(r, c, idx) {
        if(word.length === idx) return true;
        if(r >= ROW_NUM || r < 0 || board[r][c] !== word[idx]) return false; 
        
        board[r][c] = '#'; // mark as visited
        
        if (callDFS(r+1, c, idx+1)||
            callDFS(r-1, c, idx+1)||
            callDFS(r, c+1, idx+1)||
            callDFS(r, c-1, idx+1)) return true;
            
        board[r][c] = word[idx]; // reset the board
    }
    
    for(let r = 0; r < ROW_NUM; r++) {
        for(let c = 0; c < COL_NUM; c++) {
            if(board[r][c] === word[0] && callDFS(r, c, 0)) return true;
        }
    }
    return false;    
};