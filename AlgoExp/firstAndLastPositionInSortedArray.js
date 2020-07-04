//Given an array of integers nums sorted in ascending order, find the starting 
//and ending position of a given target value.

//Your algorithm's runtime complexity must be in the order of O(log n).

//If the target is not found in the array, return [-1, -1].

//Example 1:

//Input: nums = [5,7,7,8,8,10], target = 8
//Output: [3,4]
//Example 2:

//Input: nums = [5,7,7,8,8,10], target = 6
//Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const searchRange = (nums, target) => {
    let l = 0, r = nums.length, index = -1
    while (l < r) {
        let mid = Math.floor((l + r) / 2)
        if (nums[mid] === target) index = mid
        if (nums[mid] < target) l = mid + 1
        else r = mid
    }
    if (index < 0) return [-1, -1]
    while (nums[l] === nums[index]) l--
    while (nums[r] === nums[index]) r++
    return [l + 1, r - 1]
}