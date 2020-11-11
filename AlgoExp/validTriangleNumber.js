// Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
// Example 1:
// Input: [2,2,3,4]
// Output: 3
// Explanation:
// Valid combinations are: 
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3
// Note:
// The length of the given array won't exceed 1000.
// The integers in the given array are in the range of [0, 1000].

var triangleNumber = function(nums) {
    nums = nums.filter(a => a).sort((a, b) => a - b);
    let res = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            res += search(nums, nums[i] + nums[j], 0, nums.length - 1) - j - 1;
        }
    }
    return res;
};

function search(nums, target, low, high) {
    if (low > high) return low;
    let mid = low + Math.floor((high - low) / 2);
    if (target > nums[mid]) {
        return search(nums, target, mid + 1, high);
    }
    return search(nums, target, low, mid - 1);
}