/// #1 Letter Combinations of a Phone Number

//Given a string containing digits from 2-9 inclusive, return all possible 
//letter combinations that the number could represent.

//A mapping of digit to letters (just like on the telephone buttons) is given 
//below. Note that 1 does not map to any letters.

//Input: "23"
//Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].


/**
 * @param {string} digits
 * @return {string[]}
 */
const pmap = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'].map(v => v.split(''))

// i keeps track of position in digits we're at, starts at 0 by default
const letterCombinations = (digits, i = 0) => {
    // catch empty strings and terminate at final index
    if (i >= digits.length - 1) return pmap[digits[i] - 2] || []
    // iterate through new digit options, reduce can resize array to any size from []
    return pmap[digits[i] - 2].reduce((outputArray, thisLetter) => {
        letterCombinations(digits, i + 1) // get all next digits options
        // add to all of them this letter
        // push combined result as new array entry
            .forEach(laterLetters => outputArray.push(thisLetter + laterLetters))  
        return outputArray // move onto next reduce loop (next "thisLetter")
    }, []) // default & initial outputArray value
}

// #2 Valid Sudoku

//Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be 
//validated according to the following rules:

//Each row must contain the digits 1-9 without repetition.
//Each column must contain the digits 1-9 without repetition.
//Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without 
//repetition.

//Input:
//[
//  ["5","3",".",".","7",".",".",".","."],
//  ["6",".",".","1","9","5",".",".","."],
//  [".","9","8",".",".",".",".","6","."],
//  ["8",".",".",".","6",".",".",".","3"],
//  ["4",".",".","8",".","3",".",".","1"],
//  ["7",".",".",".","2",".",".",".","6"],
//  [".","6",".",".",".",".","2","8","."],
//  [".",".",".","4","1","9",".",".","5"],
//  [".",".",".",".","8",".",".","7","9"]
//]
//Output: true

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        let row = new Set(),
            col = new Set(),
            box = new Set();

            for (let j = 0; j < 9; j++) {
            let _row = board[i][j];
            let _col = board[j][i];
            let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
            
            if (_row != '.') {
                if (row.has(_row)) return false;
                row.add(_row);
            }
            if (_col != '.') {
                if (col.has(_col)) return false;
                col.add(_col);
            }
            
                if (_box != '.') {
                    if (box.has(_box)) return false;
                    box.add(_box);
                } 
            }
        }
    return true
};

// #3 Permutations

//Given a collection of distinct integers, return all possible permutations.

//Example:

//Input: [1,2,3]
//Output:
//[
//  [1,2,3],
//  [1,3,2],
//  [2,1,3],
//  [2,3,1],
//  [3,1,2],
//  [3,2,1]
//]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let output = [];
    
    function backtrack(first){
        // if all integers are used up
        // use distructure operator to clone 'nums' value and save to 'result'
        if(first === nums.length) output.push([...nums]);
        
        // we iterate over the indexes i from 'first' to the length
        // of the entire sequence 'nums'
        for(let i = first; i < nums.length; i++){
            // place i-th integer first
            // in the current permutation
            [nums[first], nums[i]] = [nums[i], nums[first]];
            
            // use next integers to complete the permutations
            backtrack(first + 1);
            
            // backtrack
            [nums[first], nums[i]] = [nums[i], nums[first]];
        }      
    }
    
    backtrack(0);
    return output;
};

//#4 Unique Paths

//A robot is located at the top-left corner of a m x n grid (marked 'Start' 
//in the diagram below).

//The robot can only move either down or right at any point in time. 
//The robot is trying to reach the bottom-right corner of the grid 
//(marked 'Finish' in the diagram below).

//How many possible unique paths are there?

//Example 1:

//Input: m = 3, n = 2
//Output: 3
//Explanation:
//From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
//1. Right -> Right -> Down
//2. Right -> Down -> Right
//3. Down -> Right -> Right

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let carry = [];
    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++){
            if (i === 1 || j === 1)
                carry[j] = 1;
            if (i !== 1&& j !== 1)
                carry[j] += carry[j - 1];
        }
    }
    return carry[n];
};

// #5 Add Two Numbers

//You are given two non-empty linked lists representing two non-negative 
//integers. The digits are stored in reverse order and each of their nodes 
//contain a single digit. Add the two numbers and return it as a linked list.

//You may assume the two numbers do not contain any leading zero, 
//except the number 0 itself.

//Example:

//Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//Output: 7 -> 0 -> 8
//Explanation: 342 + 465 = 807.



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
const addTwoNumbers = (l1, l2) => {
    // set initial node to null (to be skipped at the end)
    let result = new ListNode(null)
    // set a point to the current index (to append to the end of the linked list)
    let last = result
    let carry = 0
    // loop while there are items in either l1, l2, or carry
    while (l2 || l1 || carry) {
        // default l1 and l2 values incase one array is larger than the other
        let l2val = l2 ? l2.val : 0
        let l1val = l1 ? l1.val : 0
        // handle carry logic if greater than 10
        let sum = l2val + l1val + carry
        if (sum >= 10) {
            sum = sum - 10
            carry = 1
        } else {
            carry = 0
        }
        // make a new node 
        let node = new ListNode(sum)
        // append node
        last.next = node
        last = node
        // continue to next item of each array if exists
        if (l2) { l2 = l2.next }
        if (l1) { l1 = l1.next }
    }
    // return the result without the null in the front
    return result.next
};