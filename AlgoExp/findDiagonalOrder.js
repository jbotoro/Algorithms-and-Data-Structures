// Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

 

// Example:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]

// Output:  [1,2,4,7,5,3,6,8,9]

// Explanation:

 

// Note:

// The total number of elements of the given matrix will not exceed 10,000.

var findDiagonalOrder = function(matrix) {
    const res = [];
    for (let r = 0, c = 0, d = 1, i = 0, len = matrix.length * (matrix[0] || []).length; i < len; i++) {
        res.push(matrix[r][c]);
        r -= d;
        c += d;
        if (!matrix[r] || matrix[r][c] === undefined) {                 // We've fallen off the...
            if (d === 1) {
                if (matrix[r + 1] && matrix[r + 1][c] !== undefined) {  // ...top cliff
                    r++;
                } else {                                                // ...right cliff
                    r += 2;
                    c--;
                }
            } else {
                if (matrix[r] && matrix[r][c + 1] !== undefined) {      // ...left cliff
                    c++;
                } else {                                                // ...bottom cliff
                    r--;
                    c += 2;
                }
            }
            d = -d;
        }
    }
    return res;
};