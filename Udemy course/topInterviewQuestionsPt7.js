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

//#3 Count and Say

//The count - and - say sequence is the sequence of integers with the first 
//five terms as following:

//1.     1
//2.     11
//3.     21
//4.     1211
//5.     111221
//1 is read off as "one 1" or 11.
//11 is read off as "two 1s" or 21.
//21 is read off as "one 2, then one 1" or 1211.

//Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count - and 
//- say sequence.You can do so recursively, in other words from the previous 
//member read off the digits, counting the number of digits in groups of the 
//same digit.

//    Note: Each term of the sequence of integers will be represented as a string.


/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return "1";
    let string = "1";
    for (let i = 0; i < n - 1; i++) {
        string = countChars(string);
    }
    return string;
};

function countChars(string) {
    let idx = 0;
    let char = "";
    let count = 0;
    let result = "";

    while (idx < string.length) {
        char = string[idx];
        while (string[idx] === char) {
            count++;
            idx++;
        }
        result += count + char;
        count = 0;
    }
    return result;
}

//#4 Remove Duplicates from Sorted Array

//Given a sorted array nums, remove the duplicates in-place such that each 
//element appear only once and return the new length.

//Do not allocate extra space for another array, you must do this by modifying 
//the input array in -place with O(1) extra memory.

//    Example 1:

//Given nums = [1, 1, 2],

//    Your function should return length = 2, with the first two elements of 
//nums being 1 and 2 respectively.

//It doesn't matter what you leave beyond the returned length.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i])
            nums[++i] = nums[j];
    }
    return ++i;
};


//#5 Factorial Trailing Zeroes

//Given an integer n, return the number of trailing zeroes in n!.

//Example 1:

//Input: 3
//Output: 0
//Explanation: 3! = 6, no trailing zero.

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let numZeroes = 0;
    for (let i = 5; i <= n; i *= 5) {
        numZeroes += Math.floor(n / i);
    }
    return numZeroes;
};