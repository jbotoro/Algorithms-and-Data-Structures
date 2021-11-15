// Given two n x n binary matrices mat and target, return true if it is possible 
// to make mat equal to target by rotating mat in 90-degree increments, or 
// false otherwise.

 

// Example 1:


// Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
// Output: true
// Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.
// Example 2:


// Input: mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
// Output: false
// Explanation: It is impossible to make mat equal to target by rotating mat.
// Example 3:


// Input: mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
// Output: true
// Explanation: We can rotate mat 90 degrees clockwise two times to make mat equal 
// target.
 

// Constraints:

// n == mat.length == target.length
// n == mat[i].length == target[i].length
// 1 <= n <= 10
// mat[i][j] and target[i][j] are either 0 or 1.

var findRotation = function(mat, target) {
    let width = mat[0].length;
    let height = mat.length;
    
    let normal = true;
    let rightOneTime = true;
    let rightTwoTimes = true;
    let rightThreeTimes = true;
    for (let i = 0; i < height; i++)  {
        for (let j = 0; j < width; j++) {
            // don't rotate mat
            if (mat[i][j] !== target[i][j]) {
                normal = false;
            }
            // rotate mat right 1 time
            if (mat[i][j] !== target[j][width - 1 - i]) {
                rightOneTime = false;
            }
            // rotate mat right 2 times
            if (mat[i][j] !== target[height - 1 - i][width - 1 - j]) {
                rightTwoTimes = false;
            }
            // rotate mat right 3 times
            if (mat[i][j] !== target[height - 1 - j][i]) {
                rightThreeTimes = false;
            }
        }
    }
    return normal || rightOneTime || rightTwoTimes || rightThreeTimes;
};