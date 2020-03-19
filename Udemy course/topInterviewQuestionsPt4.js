
//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

//Symbol       Value
//I             1
//V             5
//X             10
//L             50
//C             100
//D             500
//M             1000

//Given a roman numeral, convert it to an integer. 
//Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {string} s
 * @return {number}
 */
symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var romanToInt = function(s) {
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};


// Write a function to delete a node (except the tail) 
// in a singly linked list, given only access to that node.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
   
    node.val = node.next.val
    node.next = node.next.next;
};




//Say you have an array for which the ith element is the price of a given stock on day i.

//Design an algorithm to find the maximum profit. 
//You may complete as many transactions as you like (i.e., buy one and sell one 
//share of the stock multiple times).

//Note: You may not engage in multiple transactions at the same time 
//(i.e., you must sell the stock before you buy again).
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        let prev = prices[i - 1];
        let current = prices[i];

        if (prev < current) {
            profit += current - prev;
        }
    }
    
    return profit;
};