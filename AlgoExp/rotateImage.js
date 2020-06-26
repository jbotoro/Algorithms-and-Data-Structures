//You are given an n x n 2D matrix representing an image.

//Rotate the image by 90 degrees (clockwise).

//Note:

//You have to rotate the image in-place, which means you have to modify the 
//input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

//Example 1:

//Given input matrix = 
//[
//  [1,2,3],
//  [4,5,6],
//  [7,8,9]
//],

//rotate the input matrix in-place such that it becomes:
//[
//  [7,4,1],
//  [8,5,2],
//  [9,6,3]
//]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const rotate = (matrix) => {
    for (let n = 0; n < matrix.length; n++) {
        for (let m = 0; m < matrix.length; m++) {
            if (n === m) break;
            [matrix[n][m], matrix[m][n]] = [matrix[m][n], matrix[n][m]];
        }
    }
    for (let n = 0; n < matrix.length; n++) {
        matrix[n] = matrix[n].reverse();
    }
};