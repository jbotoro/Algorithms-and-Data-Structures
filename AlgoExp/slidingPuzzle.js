// On a 2x3 board, there are 5 tiles represented by the integers 1 through 5, and an empty square represented by 0.

// A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

// The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

// Given a puzzle board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

// Examples:

// Input: board = [[1,2,3],[4,0,5]]
// Output: 1
// Explanation: Swap the 0 and the 5 in one move.
// Input: board = [[1,2,3],[5,4,0]]
// Output: -1
// Explanation: No number of moves will make the board solved.
// Input: board = [[4,1,2],[5,0,3]]
// Output: 5
// Explanation: 5 is the smallest number of moves that solves the board.
// An example path:
// After move 0: [[4,1,2],[5,0,3]]
// After move 1: [[4,1,2],[0,5,3]]
// After move 2: [[0,1,2],[4,5,3]]
// After move 3: [[1,0,2],[4,5,3]]
// After move 4: [[1,2,0],[4,5,3]]
// After move 5: [[1,2,3],[4,5,0]]
// Input: board = [[3,2,4],[1,5,0]]
// Output: 14
// Note:

// board will be a 2 x 3 array as described above.
// board[i][j] will be a permutation of [0, 1, 2, 3, 4, 5].



/**
 * @param {number[][]} board
 * @return {number}
 */
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    // moves keeps the place a tile position can swap to.
    let moves = {
        0: [1, 3],
        1: [0, 2, 4],
        2: [1, 5],
        3: [0, 4],
        4: [1, 3, 5],
        5: [2, 4]
    };
    // we convert 2D array to a string instead => state
    let state = '';
    board.forEach(el => {
        state += el.join('');
    });
    
    // this is the starting point where 0's at initially
    let start = state.indexOf('0');
    
    // visited keeps track of swaps we have done before to prevent loops
    let visited = new Set();
    
    // queue holds the swaps that we need to check for going forward. BFS
    // [start = 0 position, state = string rep of current matrix, 0 == total steps so far]
    let queue = [[start, state, 0]];
    
    // keep looping until there's stuff in the queue
    while(queue.length) {
        // get the first element;
        const [curr, state, steps] = queue.shift();
        
        // if this is equal to the end state, we're golden. Return.
        if(state === '123450') {
            return steps;
        } else if(visited.has(state)) {
            // if we've visited this state before, continue.
            continue;
        } else {
            // add this new state to places we've been before
            visited.add(state)
            // now we try swapping 0 wherever we can, based on the moves map
            for(let nxt of moves[curr]) {
                // a hack to replace 0 with some other position
                let temp = state.split('');
                [temp[nxt], temp[curr]] = [temp[curr], temp[nxt]];
                
                // push this new state for us to check as we traverse queue
                queue.push([nxt, temp.join(''), steps + 1]);
            }
        }
    }
    
    // we didn't find anything that worked. Return -1
    return -1;
};