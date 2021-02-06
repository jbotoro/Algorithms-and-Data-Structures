// In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the ith domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

// We may rotate the ith domino, so that A[i] and B[i] swap values.

// Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

// If it cannot be done, return -1.

 

// Example 1:


// Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
// Output: 2
// Explanation: 
// The first figure represents the dominoes as given by A and B: before we do any rotations.
// If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
// Example 2:

// Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
// Output: -1
// Explanation: 
// In this case, it is not possible to rotate the dominoes to make one row of values equal.
 

// Constraints:

// 2 <= A.length == B.length <= 2 * 104
// 1 <= A[i], B[i] <= 6

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
    if(A.length === 1) {
        return 0;
    }
    
    let countA = {};
    let countB = {};
    let same = {};
    let n = A.length;
    
    for(let i=0; i<A.length; i++) {
        const a = A[i];
        const b = B[i];
        countA[a] = countA[a] + 1 || 1;
        countB[b] = countB[b] + 1 || 1;
        
        if(a === b) {
            same[a] = same[a] + 1 || 1;
        }
    }
    
    // loop through all possible domino numbers 1 through 6
    for(let i=1; i<7; i++) {
        const a = countA[i];
        const b = countB[i];
        const s = same[i] || 0;
        const max = Math.max(a, b);
        // excluding all duplicates (same arr), check if it's possible at all
        if(a + b - s == A.length) {
            return n - max;
        }
    }
    
    return -1;

};