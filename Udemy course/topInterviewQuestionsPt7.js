// #1 Plus One:

//Given a non-empty array of digits representing a non-negative integer, 
//plus one to the integer.

//The digits are stored such that the most significant digit is at the head of 
//the list, and each element in the array contain a single digit.

//You may assume the integer does not contain any leading zero, except the 
//number 0 itself.

//    Example 1:

//Input: [1, 2, 3]
//Output: [1, 2, 4]
//Explanation: The array represents the integer 123.


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};

//#2 Two Sum

//Given an array of integers, return indices of the two numbers such that they 
//add up to a specific target.

//You may assume that each input would have exactly one solution, and you may 
//not use the same element twice.

//    Example:

//Given nums = [2, 7, 11, 15], target = 9,

//    Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};