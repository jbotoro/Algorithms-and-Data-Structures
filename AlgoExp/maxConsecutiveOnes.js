// Given an array A of 0s and 1s, we may change up to K values from 0 to 1.

// Return the length of the longest (contiguous) subarray that contains only 1s. 

 

// Example 1:

// Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
// Output: 6
// Explanation: 
// [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
// Example 2:

// Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
// Output: 10
// Explanation: 
// [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
 

// Note:

// 1 <= A.length <= 20000
// 0 <= K <= A.length
// A[i] is 0 or 1 

// Approach:

// Let's see, first of all, we only need to find out the longest subarray which 
// means we don't care about the others.

// Then, if we have a subarray right now. There are only 2 situations:

// We could find a longer one: the window will be validated naturally when we meet the longer one.
// It's the longest one: we got the longest length even the current window may not be validated.
// So, according to this, we could get this code:

const longestOnes = (arr, k) => {
    let left = -1;
    for (let right = 0; right < arr.length; ++right) {
        arr[right] === 0 && --k;
        k < 0 && arr[++left] === 0 && ++k;
    }
    return arr.length - left - 1;
};