// Given a matrix of m x n elements (m rows, n columns), return all elements 
//of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = []
    while(matrix.length>0) {  // cut the top->right->bottom->left sides until matrix is empty
        let top = matrix.shift()
        let bottom = (matrix.pop() || []).reverse()
        let left = [], right = []
        for (let i=0; i<matrix.length; i++) {
            if (matrix[i].length>0) right.push( matrix[i].pop() )
            if (matrix[i].length>0) left.unshift( matrix[i].shift())
        }
        res.push(...top,...right,...bottom,...left)
    }
    return res
};