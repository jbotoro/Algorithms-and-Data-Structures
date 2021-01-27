// On an NxN chessboard, a knight starts at the r-th row and c-th column and attempts to make exactly K moves. The rows and columns are 0 indexed, so the top-left square is (0, 0), and the bottom-right square is (N-1, N-1).

// A chess knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

 



 

// Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.

// The knight continues moving until it has made exactly K moves or has moved off the chessboard. Return the probability that the knight remains on the board after it has stopped moving.

 

// Example:

// Input: 3, 2, 0, 0
// Output: 0.0625
// Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
// From each of those positions, there are also two moves that will keep the knight on the board.
// The total probability the knight stays on the board is 0.0625.

const knightProbability = (N, K, r, c) => {
    const dirs = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];

    const dp = [...Array(K + 1)].map(() => [...Array(N)].map(() => Array(N).fill(0)));
    dp[0][r][c] = 1;

    for (let k = 1; k <= K; k++) {
        for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            for (const [dx, dy] of dirs) {
            const x = i + dx;
            const y = j + dy;
            if (x >= 0 && x < N && y >= 0 && y < N) {
                dp[k][i][j] += dp[k - 1][x][y] / 8;
            }
            }
        }
        }
    }

    let res = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
        res += dp[K][i][j];
        }
    }
    return res;
};