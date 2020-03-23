// #1 Symmetric Tree 

//Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree[1, 2, 2, 3, 4, 4, 3] is symmetric:
// But the following [1,2,2,null,3,null,3] is not:

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// Recursive solution 
var isSymmetric = function (root) {
    if (!root) return root;

    // isMirrored function
    const isMirrored = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        return (left.val === right.val &&
            isMirrored(left.left, right.right) &&
            isMirrored(left.right, right.left))
    }
    // traverse
    return isMirrored(root.left, root.right);
};


// #2 Max SubArray 
// Given an integer array nums, find the contiguous subarray 
//(containing at least one number) which has the largest sum and return its sum.

//Example:

//Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
//    Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
    }
    return Math.max(...nums)
};


// #3 Power of Three:

//Given an integer, write a function to determine if it is a power of three.
// Output should be true or false

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    /* 
    If a number is a power of 3, only the first digit in its ternary form is 1,
    and all the other digits are zeros. 
    Examples: 1, 10, 100, 1000, etc.
    So we can just convert a decimal number to ternary and check if the above
    conditions are met.
    */

    if (n == 1) {
        return true;
    }

    let numTern = n.toString(3);
    return (numTern[0] == '1' &&
        !(numTern.slice(1).split('').findIndex(function (x) { return x != '0' }) > -1))
};

//#4 Number of 1 Bits

// Write a function that takes an unsigned integer and return the number of 
// '1' bits it has (also known as the Hamming weight).

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    // remove 0s from base2 representation of the number
    return n.toString(2).replace(/0/g, '').length;
};

//#5 House Robber
//You are a professional robber planning to rob houses along a street. 
//Each house has a certain amount of money stashed, the only constraint stopping 
//you from robbing each of them is that adjacent houses have security system 
//connected and it will automatically contact the police if two adjacent houses 
//were broken into on the same night.

//Given a list of non - negative integers representing the amount of money of 
//each house, determine the maximum amount of money you can rob tonight 
//without alerting the police.

//Example 1:

//Input: [1, 2, 3, 1]
//Output: 4
//Explanation: Rob house 1(money = 1) and then rob house 3(money = 3).
//Total amount you can rob = 1 + 3 = 4.

/**
 * @param {number[]} nums
 * @return {number}
 */

//variable p records previous 2 max values: p[1] is the previous one and 
//p[0] is the one before previous one. p is initialized as [0,0]. 
//variable n is the value at each position.
var rob = function (nums) {
    return nums.reduce(function (p, n) {
        return [p[1], Math.max(p[0] + n, p[1])];
    }, [0, 0])[1];
};