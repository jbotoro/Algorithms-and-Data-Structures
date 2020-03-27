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

//#3 Count Primes

//Count the number of prime numbers less than a non-negative number, n.

//Example:

//Input: 10
//Output: 4
//Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const nums = [...Array(n).keys()].slice(2);
    for (let i = 0; i <= Math.floor(Math.sqrt(n)); i++) {
        if (nums[i]) {
            for (let j = i + nums[i]; j <= n; j += nums[i]) {
                nums[j] = undefined; // Sieve of Eratosthenes
            }
        }
    }
    return nums.filter(n => n).length;
};

//#4 Reverse Integer

//Given a 32-bit signed integer, reverse digits of an integer.

//Example 1:

//Input: 123
//Output: 321

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const reversed =  parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
};

//#5 Binary Tree Inorder Traversal

//Given a binary tree, return the inorder traversal of its nodes' values.

//Example:

//Input: [1,null,2,3]
//   1
//    \
//     2
//   /
//   3

//Output: [1,3,2]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
    const stack = [];
    const res = [];

    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }

    return res;
}