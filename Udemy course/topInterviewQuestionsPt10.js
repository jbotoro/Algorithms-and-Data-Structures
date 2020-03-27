// #1 Valid Palindrome

//Given a string, determine if it is a palindrome, considering only alphanumeric 
//characters and ignoring cases.

//Note: For the purpose of this problem, we define empty string as valid palindrome.

//Example 1:

//Input: "A man, a plan, a canal: Panama"
//Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // replace all non letter characters with empty space to remove any spaces, underscores etc.
    var strippedString = s.replace(/\W/g, '');
    //reverse string
    var reversedString = strippedString.split('').reverse().join('');
    // make sure both are lower cased
    return strippedString.toLowerCase() == reversedString.toLowerCase();
};


//#2 Rotate Array

//Given an array, rotate the array to the right by k steps, where k is non-negative.

//Example 1:

//Input: [1,2,3,4,5,6,7] and k = 3
//Output: [5,6,7,1,2,3,4]
//Explanation:
//rotate 1 steps to the right: [7,1,2,3,4,5,6]
//rotate 2 steps to the right: [6,7,1,2,3,4,5]
//rotate 3 steps to the right: [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length - k));
    return nums;
};