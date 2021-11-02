// Search a 2D Matrix


// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

//** Brute force - O(mn)**
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === target) return true
        }
    }
    return false
 };


// **Binary search in each row - O(mlog n)**
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
        let start = 0, end = matrix[0].length - 1

        while(start <= end) {
            let mid = Math.floor((start + end) / 2)
            if(matrix[i][mid] === target) return true
            
            if(matrix[i][mid] > target) end = mid - 1
            else start = mid + 1
        }
    }
    return false
}