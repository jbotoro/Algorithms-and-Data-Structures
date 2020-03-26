//#1 Longest Common Prefix

//Write a function to find the longest common prefix string amongst an array 
//of strings.

//If there is no common prefix, return an empty string "".

//    Example 1:

//Input: ["flower", "flow", "flight"]
//Output: "fl"

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }

    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};

//#2 Intersection of Two Linked Lists

//Write a program to find the node at which the intersection of two singly 
//linked lists begins.

//For example, the following two linked lists:


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    // General idea: Switch tracks at the end, so you even out un-even linked lists
    // they will sync up at the intersection that way. Now you can straight up do a comparison
    // For example: 
    // A will follow 4 - 1 - 8 - 4 - 5 - 5 - 0 - 1 - 8
    // B will follow 5 - 0 - 1 - 8 - 4 - 5 - 4 - 1 - 8

    // Now we need to account for the case where they don't intersect, or our loop
    // would run forever. If after switching tracks, they both reach null at the same time
    // that's when we know to stop

    // Basic leetcode input checks;
    if (!headA || !headB) {
        return null;
    }

    // current nodes
    let curA = headA;
    let curB = headB;

    // our end check. this works because we switch track to sync up
    while (curA !== curB) {

        if (curA.next) {
            // regular follow the path
            curA = curA.next;
        } else {

            if (!curB.next) {
                // if curB also reaches null next, we've ended up at the end without
                // any match found. break out of the loop and return null now.
                curA = null;
                curB = null;
                break;
            }
            // switch tracks to even out uneven length
            curA = headB;
        }

        if (curB.next) {
            // regular follow the path
            curB = curB.next
        } else {
            // switch tracks to even out uneven length
            curB = headA;
        }
    }

    return curB;
};


//#3 Implement strStr()

//Implement strStr().

//Return the index of the first occurrence of needle in haystack, or - 1 
//if needle is not part of haystack.

//    Example 1:

//Input: haystack = "hello", needle = "ll"
//Output: 2

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const needleLength = needle.length;
    if (needleLength === 0) return 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, i + needleLength) === needle) {
            return i;
        }
    }
    return -1;
};

//#4 Sqrt(x)

//Implement int sqrt(int x).

//Compute and return the square root of x, where x is guaranteed to be a 
//non - negative integer.

//Since the return type is an integer, the decimal digits are truncated and only 
//the integer part of the result is returned.

//    Example 1:

//Input: 4
//Output: 2

//Remember that the square root of each X must happen within [1, x/2 + 1]

//So we can cut half at the first place.

//The tricky point is that we will return right if there is no square root found.

//The reason is the square root is between[n - 1, n] and we can know that 
//when while is broken right must be n - 1

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    var left = 1;
    var right = Math.floor(x / 2) + 1;
    var mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (mid * mid > x) {
            right = mid - 1;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return right;
};

//#5 Reverse Bits

//Reverse bits of a given 32 bits unsigned integer.



//Example 1:

//Input: 00000010100101000001111010011100
//Output: 00111001011110000010100101000000
//Explanation: The input binary string 00000010100101000001111010011100 represents 
//the unsigned integer 43261596, so return 964176192 which its binary representation 
//is 00111001011110000010100101000000.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    var result = 0;
    var count = 32;

    while (count--) {
        result *= 2;
        result += n & 1;
        n = n >> 1;
    }
    return result;
};