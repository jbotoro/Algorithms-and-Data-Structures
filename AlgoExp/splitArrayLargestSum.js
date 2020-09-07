// Given an array nums which consists of non-negative integers and an integer 
//m, you can split the array into m non-empty continuous subarrays.

// Write an algorithm to minimize the largest sum among these m subarrays.

 

// Example 1:

// Input: nums = [7,2,5,10,8], m = 2
// Output: 18
// Explanation:
// There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8],
// where the largest sum among the two subarrays is only 18.
// Example 2:

// Input: nums = [1,2,3,4,5], m = 2
// Output: 9
// Example 3:

// Input: nums = [1,4,4], m = 3
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 106
// 1 <= m <= min(50, nums.length)

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    let DEBUG = false;

    let largestInArray = nums.reduce((a, b) => Math.max(a, b));
    let sumOfArray = nums.reduce((a, b) => a + b);

    // Handle some quick corner cases
    if (m === 1) {
        return sumOfArray;
    } else if (m === nums.length) {
        return largestInArray;
    }

    let low = 0;
    let high = sumOfArray;
    let bestResult = high;

    while (low <= high) {
        let midpoint = Math.floor((low + high) / 2);
        if (DEBUG) console.log("Low:", low, "High:", high, "Midpoint", midpoint)

        // Split the numbers into subarrays
        let subarrays = 1;
        let subarraySum = 0;
        let subarrayMaxSum = 0;

        nums.forEach(num => {
            if ((subarraySum + num) <= midpoint) {
                subarraySum += num;
            } else {
                if (DEBUG) console.log("Subarray:", subarraySum);
                subarrayMaxSum = Math.max(subarrayMaxSum, subarraySum);
                subarrays++;
                subarraySum = num;
            }
        });
        subarrayMaxSum = Math.max(subarrayMaxSum, subarraySum);
        if (DEBUG) console.log("Subarray:", subarraySum);
        if (DEBUG) console.log("Subarray Max:", subarrayMaxSum);
        if (DEBUG) console.log("Total subarrays:", subarrays);

        // Compare the number of subarrays to m
        if (subarrays <= m) {
            // This could be OK but keep trying
            if (DEBUG) console.log("!! VALID - set High to", midpoint - 1);
            if (subarrays === m) {
                bestResult = Math.min(bestResult, subarrayMaxSum);
            }
            high = midpoint - 1;
        } else {
            // Too many subarrays created
            if (DEBUG) console.log("!! INVALID - set Low to", midpoint);
            low = midpoint + 1;
        }
        if (DEBUG) console.log("Best Result:", bestResult);
    }

    return bestResult;