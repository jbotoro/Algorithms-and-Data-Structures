// Suppose an array sorted in ascending order is rotated at some pivot unknown 
//to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its 
//index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1



var search = function(nums, target) {
    let start = 0,
        end = nums.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        // fast path, early returns...
        if (nums[mid] === target) return mid;
        if (nums[start] === target) return start;
        if (nums[end] === target) return end;

        // left part is sorted...
        if (nums[mid] > nums[start]) {
        if (target > nums[start] && target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        }
        // right part is sorted...
        else if (nums[mid] < nums[end]) {
        if (target > nums[mid] && target < nums[end]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        } else {
        return -1;
        }
    }
    return nums[start] === target ? start : -1;
};