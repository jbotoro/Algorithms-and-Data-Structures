// In a given 2D binary array A, there are two islands.  (An island is a 4-directionally connected group of 1s not connected to any other 1s.)

// Now, we may change 0s to 1s so as to connect the two islands together to form 1 island.

// Return the smallest number of 0s that must be flipped.  (It is guaranteed that the answer is at least 1.)

 

// Example 1:

// Input: A = [[0,1],[1,0]]
// Output: 1
// Example 2:

// Input: A = [[0,1,0],[0,0,0],[0,0,1]]
// Output: 2
// Example 3:

// Input: A = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// Output: 1
 

// Constraints:

// 2 <= A.length == A[0].length <= 100
// A[i][j] == 0 or A[i][j] == 1

const shortestBridge = (A) => {
    // identify 1st island
    identifyIslands(A);

    // enqueue all 1's
    const queue = new Array();
    primeFirstIsland(A, queue);
    
	// no 1's? means only 1 island
    if(queue.length === 0) return 0;
    
    // get min distance to second island
    return bfs(A, queue);
};

const primeFirstIsland = (matrix, queue) => {
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] === 1) queue.unshift( { row, col, dist: 0 } );
        }
    }    
}

const identifyIslands = (matrix) => {
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] === 1) {
                // mark all connected as 2
                dfs(matrix, row, col);
                return;
            }
        }
    }
}

const bfs = (matrix, queue) => {
    let min = Number.MAX_SAFE_INTEGER;
    
    while(queue.length) { 
        const curr = queue.pop();
        const row = curr.row;
        const col = curr.col;
        const distance = curr.dist;
        
        if(matrix[row][col] === 2) {
            min = Math.min(min, distance - 1);
            continue;
        }
        
        for(const dir of directions) {
            const nextRow = row + dir[0];
            const nextCol = col + dir[1];
            if(
                nextRow >= 0
                && nextRow < matrix.length
                && nextCol >= 0
                && nextCol < matrix[0].length
                && (
                    matrix[nextRow][nextCol] === 0 
                    || matrix[nextRow][nextCol] === 2
                )
            ) {
                if(matrix[nextRow][nextCol] === 0) matrix[nextRow][nextCol] = 3;
                queue.unshift( { row: nextRow, col: nextCol, dist: distance + 1 } );
            }
        }
    }
    
    return min;
}

// up down left right
const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const dfs = (A, row, col) => {
    if(
        row < 0
        || row >= A.length
        || col < 0
        || col >= A[0].length
        || A[row][col] !== 1
    ) return;
    
    A[row][col] = 2;
    
    for(const dir of directions) {
        const nextRow = row + dir[0];
        const nextCol = col + dir[1];
        dfs(A, nextRow, nextCol);
    }
};