// Let's call any (contiguous) subarray B (of A) a mountain if the following properties hold:

// B.length >= 3
// There exists some 0 < i < B.length - 1 such that B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
// (Note that B could be any subarray of A, including the entire array A.)

// Given an array A of integers, return the length of the longest mountain. 

// Return 0 if there is no mountain.

// Example 1:

// Input: [2,1,4,7,3,2,5]
// Output: 5
// Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
// Example 2:

// Input: [2,2,2]
// Output: 0
// Explanation: There is no mountain.
// Note:

// 0 <= A.length <= 10000
// 0 <= A[i] <= 10000

function longestMountain(a) {
    let longestMountainLength = 0;
    let mountainFrom = a.length;

    for (let i = 1; i < a.length; ++i) {
        const beforePrevious = i >= 2 ? a[i - 2] : Infinity;
        const previous = a[i - 1];
        const current = a[i];

        // update mountainFrom to before when the previous is the foot of a mountain
        if (current > previous && previous <= beforePrevious) {
        mountainFrom = i - 1;
        continue;
        }

        // update mountainFrom to current when there's flat terrain between current and beforePrevious
        if (current === previous || beforePrevious === previous) {
        mountainFrom = i;
        continue;
        }

        // start counting mountain length in down trend
        if (current < previous) {
        longestMountainLength = Math.max(longestMountainLength, i - mountainFrom + 1);
        }
    }

    return longestMountainLength >= 3 ? longestMountainLength : 0;
}