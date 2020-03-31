//#1 Trapping Rain Water

//Given n non-negative integers representing an elevation map where the width 
//of each bar is 1, compute how much water it is able to trap after raining.

//Example:

//Input: [0,1,0,2,1,0,1,3,2,1,2,1]
//Output: 6

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(array) {

    let leftArray = new Array(array.length).fill(0);
    let left =0;

    for(let i =0; i < array.length; i++){
    
    const height = array[i];
    leftArray[i] = left; 
    left = Math.max(left, height)
    }



    
    let right =0;
    for(let i =array.length -1;i >=0; i--){
        const height = array[i];
        const minHeight = Math.min(leftArray[i],right);
    
        if(height < minHeight){
            leftArray[i] = minHeight-height;
        }else{
            leftArray[i] =0;
        } 
        
        right = Math.max(right, height)
    }
    return leftArray.reduce((a,b)=> a +b,0)
};

//#2 Word Break

//Given a non-empty string s and a dictionary wordDict containing a list of 
//non-empty words, determine if s can be segmented into a space-separated 
//sequence of one or more dictionary words.

//Note:

//The same word in the dictionary may be reused multiple times in the segmentation.
//You may assume the dictionary does not contain duplicate words.
//Example 1:

//Input: s = "leetcode", wordDict = ["leet", "code"]
//Output: true
//Explanation: Return true because "leetcode" can be segmented as "leet code".

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (!s && !wordDict.length) {
        return true;
    } else if (!s || !wordDict.length ) {
        return false;
    }    
    let dp = new Array(s.length+1).fill(false);
    dp[0] = true;
    // dp[i] 代表 0-i是breakable的
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    } 
    return dp[s.length]
};

//#3 Next Permutation

//Implement next permutation, which rearranges numbers into the lexicographically 
//next greater permutation of numbers.

//If such arrangement is not possible, it must rearrange it as the lowest 
//possible order (ie, sorted in ascending order).

//The replacement must be in-place and use only constant extra memory.

//Here are some examples. Inputs are in the left-hand column and its 
//corresponding outputs are in the right-hand column.

//1,2,3 → 1,3,2
//3,2,1 → 1,2,3
//1,1,5 → 1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let j = nums.length - 1, i = j - 1;
    while (nums[i + 1] <= nums[i]) i--;
    if (~i) {
        while (nums[j] <= nums[i]) j--;
        swap(nums, i, j);
    }
    for (let k = i + 1, stop = (i + nums.length) / 2; k < stop; k++) {
        swap(nums, k, nums.length - k + i);
    }
};

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

//#4 Merge Intervals

//Given a collection of intervals, merge all overlapping intervals.

//Example 1:

//Input: [[1,3],[2,6],[8,10],[15,18]]
//Output: [[1,6],[8,10],[15,18]]
//Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) {
        return intervals;
    } 
    
    const merged = [];
    
    intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
        
    let buffer = intervals[0];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= buffer[1]) {
            buffer = [buffer[0], Math.max(buffer[1], intervals[i][1])];
        } else {
            merged.push(buffer);
            buffer = intervals[i];
        }
    }
    
    merged.push(buffer);
    
    return merged;
};