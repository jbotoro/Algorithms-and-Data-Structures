// Given an array nums, we call (i, j) an important reverse pair if i < j and nums[i] > 2*nums[j].

// You need to return the number of important reverse pairs in the given array.

// Example1:

// Input: [1,3,2,3,1]
// Output: 2
// Example2:

// Input: [2,4,3,5,1]
// Output: 3
// Note:
// The length of the given array will not exceed 50,000.
// All the numbers in the input array are in the range of 32-bit integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var mergeOp = function(nums, low, mid, high) {
    let count = 0;
    let j = mid + 1;
    for(let i =low; i<= mid; i++){
        while(j<=high && nums[i] > 2*nums[j]) j++;
        count += (j - (mid+1));
    }
    let sortArray = [];
    let left = low;
    let right = mid+1;
    while(left <= mid && right <= high){
        if(nums[left] <= nums[right]) sortArray.push(nums[left++]);
        else sortArray.push(nums[right++]);
    }
    while(left <= mid){
        sortArray.push(nums[left++]);
    }
        while(right <= high){
            sortArray.push(nums[right++]);
        }
        for(let i = low; i<= high; i++){
            nums[i] = sortArray[i-low];
        }
        return count;
};
var merge = function(nums, low, high) {
    if(low>=high) return 0;
        let mid = Math.floor((low+high)/2);
        let count = merge(nums, low, mid);
        count += merge(nums, mid+1, high);
        count += mergeOp(nums, low, mid, high);
        return count;
};

var reversePairs = function(nums) {
    return merge(nums, 0, nums.length -1);
};