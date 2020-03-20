
// #1 Merge Two Sorted Lists:
//Merge two sorted linked lists and return it as a new list. 
//The new list should be made by splicing together the nodes of the first two lists.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2) return l1 || l2
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
};


// #2 Happy Number:

// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: 
//Starting with any positive integer, replace the number by the sum of the 
//squares of its digits, and repeat the process until the number equals 
//1(where it will stay), or it loops endlessly in a cycle which does not include 
//1. Those numbers for which this process ends in 1 are happy numbers.


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function (sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}

// #3 Pascal's Triangle:
//Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var pascal = [];
    for (var i = 0; i < numRows; i++) {
        pascal[i] = [];
        pascal[i][0] = 1;
        for (var j = 1; j < i; j++) {
            pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]
        }
        pascal[i][i] = 1;
    }
    return pascal;
};


// #4 Climbing Stairs:

//You are climbing a stair case. It takes n steps to reach to the top.
//Each time you can either climb 1 or 2 steps.In how many distinct ways can 
//you climb to the top ?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let table = new Array(n + 1);
    table[0] = 1;
    table[1] = 1;

    for (let i = 2; i < table.length; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[table.length - 1];
};