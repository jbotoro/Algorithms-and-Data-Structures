// Given a matrix and a target, return the number of non-empty submatrices that sum to target.

// A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2.

// Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some coordinate that is different: for example, if x1 != x1'.

 

// Example 1:


// Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
// Output: 4
// Explanation: The four 1x1 submatrices that only contain 0.
// Example 2:

// Input: matrix = [[1,-1],[-1,1]], target = 0
// Output: 5
// Explanation: The two 1x2 submatrices, plus the two 2x1 submatrices, plus the 2x2 submatrix.
// Example 3:

// Input: matrix = [[904]], target = 0
// Output: 0
 

// Constraints:

// 1 <= matrix.length <= 100
// 1 <= matrix[0].length <= 100
// -1000 <= matrix[i] <= 1000
// -10^8 <= target <= 10^8

var numSubmatrixSumTarget = function(matrix, target) {
    const prefixSums = new Array(matrix.length + 1)
        .fill()
        .map(() => new Array(matrix[0].length + 1).fill(0));
    
    for (let i = 1; i <= matrix.length; i++) {
        for (let j = 1; j <= matrix[0].length; j++) {
            prefixSums[i][j] = matrix[i-1][j-1] + prefixSums[i-1][j] + prefixSums[i][j-1] - prefixSums[i-1][j-1];
        }
    }
    
    let count = 0;
    for (let r1 = 1; r1 <= matrix.length; r1++) {
        for (let r2 = r1; r2 <= matrix.length; r2++) {
            const counts = {};
            counts[0] = 1;
            for (let c = 1; c <= matrix[0].length; c++) {
                const sum = prefixSums[r2][c] - prefixSums[r1 - 1][c];
                count += counts[sum - target] || 0;
                counts[sum] = (counts[sum] || 0) + 1;
            }
        }
    }
    
    return count;
};