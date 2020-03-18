// Reverse a singly linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head.next) {
        return head;
    }

    let first = head
    let second = first.next;

    while (second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }

    head.next = null;
    head = first;

    return head;
};

// Given a column title as appear in an Excel sheet, return its corresponding column number.

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    const charCodeBase = 'A'.charCodeAt(0) - 1;
    const n = s.length;
    let number = 0;

    /* 
     * Think of it as base 26. For example,
     * Column number of "AB" = 1 * 26^1 + 2 * 26^0 
     */
    for (let i = 0; i < n; i++)
        number += (s.charCodeAt(i) - charCodeBase) * Math.pow(26, n - i - 1);

    return number;
};

//Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

//You may assume that the array is non - empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    const hash = {}
    let max = 0, val

    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] ? hash[nums[i]]++ : hash[nums[i]] = 1
        if (hash[nums[i]] > max) {
            max = hash[nums[i]]
            val = nums[i]
        }
    }

    return val
};