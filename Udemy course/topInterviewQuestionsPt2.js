//Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root
// node down to the farthest leaf node.
// Note: A leaf is a node with no children.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === undefined || root === null) {
        return 0;
    }

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};


//Given an array nums, write a function to move all 0's to the end of it while 
// maintaining the relative order of the non-zero elements.


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = 0
    let j = -1;

    while (++j < nums.length) {
        if (nums[j] !== 0) {
            nums[i++] = nums[j]
        }
    }
    return nums.fill(0, i)
};


//Calculate the sum of two integers a and b, but you are not allowed 
// to use the operator + and -.

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let carry;

    while (b) {
        carry = a & b;
        a ^= b;
        b = carry << 1;
    }

    return a;
};