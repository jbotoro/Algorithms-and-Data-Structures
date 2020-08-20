// Given an unsorted array of integers, find the length of longest increasing 
//subsequence.

// Example:

// Input: [10,9,2,5,3,7,101,18]
// Output: 4 
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the
// length is 4. 
// Note:

// There may be more than one LIS combination, it is only necessary for you to 
//return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var n = nums.length;
    if (!n) return 0;
    var len = 1;
    var dp = [nums[0]];
    for (var i = 1; i < n; i++) {
        if (dp[len - 1] < nums[i]) {
            dp[len++] = nums[i];
        } else {
            var left = 0, right = len - 1, num = nums[i];
            while (left < right) {
                var mid = left + Math.floor((right - left) / 2);
                if (dp[mid] < num) left = mid + 1;
                else right = mid;
            }
            dp[right] = num;
        }
    }
    return len;
};