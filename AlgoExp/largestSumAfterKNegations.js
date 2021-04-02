// Given an array A of integers, we must modify the array in the following way: we choose an i and replace A[i] with -A[i], and we repeat this process K times in total.  (We may choose the same index i multiple times.)

// Return the largest possible sum of the array after modifying it in this way.

 

// Example 1:

// Input: A = [4,2,3], K = 1
// Output: 5
// Explanation: Choose indices (1,) and A becomes [4,-2,3].
// Example 2:

// Input: A = [3,-1,0,2], K = 3
// Output: 6
// Explanation: Choose indices (1, 2, 2) and A becomes [3,1,0,2].
// Example 3:

// Input: A = [2,-3,-1,5,-4], K = 2
// Output: 13
// Explanation: Choose indices (1, 4) and A becomes [2,3,-1,5,4].
 

// Note:

// 1 <= A.length <= 10000
// 1 <= K <= 10000
// -100 <= A[i] <= 100

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumAfterKNegations = (A, K) => {
    A.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        let val = A[i];
        if (0 < K) {
        if (val < 0) {
            let next = A[i + 1];
            if (Math.abs(val) < next && 0 === K % 2) K = 0;
            else [val, K] = [-val, K - 1];
        } else if (0 !== val && 1 === K % 2) [val, K] = [-val, 0];
        else K = 0;
        }
        sum += val;
    }
    return sum;
};