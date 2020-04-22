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

//#6 Longest Palindromic Substring

//Given a string s, find the longest palindromic substring in s. You may assume 
//that the maximum length of s is 1000.

//Example 1:

//Input: "babad"
//Output: "bab"
//Note: "aba" is also a valid answer.


const longestPalindrome = s => {
    const len = s.length
    let left, right, full
    let longest = ''
    let current = ''

  // reusable parse w/ recalculating limits
    const scan = (start, end, step) => {
        // i is center of search in index units of s
        for (let i = start; end(i); i += step) {
        // parse substring, full scan initially
        full = true
        // j = letters around i to check, start 1 beyond longest
            for (let j = (longest.length + 1) / 2; j < len / 2 + 1; j++) {
                // slicing cutoffs
                left = Math.ceil(i - j)
                right = Math.floor(i + j + 1) // +1 includes in slice
                // limits
                if (left < 0 || right > len) break
                // cuts from left to right - 1
                current = s.slice(left, right)
                if (isPalindrome(current, { full })) {
                // since j starts at new record, this is always longest
                longest = current
                // inside correct, no need to recheck inners
                full = false
                } else {
                break // clearly search at this i is over
                }
            }
        }
    }

  // best way to skip is to find long one in center
  // can exclude edges where next longest cannot fit

  // use () => val to constantly recalculate termination condition from "longest"
  // if longest is 5 chars, there's no point checking center 2 chars away from end

  // .5 steps for centers between letters, round steps for letters as centers

  // scan from center to right minus impossible to win area
    scan(len / 2, i => i < len - (longest.length / 2), 0.5)
  // scan from center to left minus impossible to win edge
    (len / 2 - 0.5, i => i >= longest.length / 2, -0.5)

    return longest
}

// if not full scan, only check outermost chars
const isPalindrome = (str, { full }) => {
    const len = str.length
    if (len <= 1) return true // terminate early
    for (let i = 0; i < (len - 1) / 2; i++) {
        if (str[i] !== str[len - 1 - i]) return false
    // if not full scan, only check outermost chars
        if (!full) break
    }
    return true
}


//#7 Remove Nth Node from End of List

//Given a linked list, remove the n-th node from the end of list and return 
//its head.

//Example:

//Given linked list: 1->2->3->4->5, and n = 2.

//After removing the second node from the end, the linked list becomes 
//1->2->3->5 
//Note:

//Given n will always be valid.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let hare = head, curr = head;
    while (n--) {
        hare = hare.next;
    }
    while (hare && hare.next) {
        curr = curr.next;
        hare = hare.next;
    }
    if (!hare) {
        head = head.next;
    } else {
        curr.next = curr.next ? curr.next.next : null;
    }
    return head;
};

//#8 Median of Two Sorted Arrays

//There are two sorted arrays nums1 and nums2 of size m and n respectively.

//Find the median of the two sorted arrays. The overall run time complexity 
//should be O(log (m+n)).

//You may assume nums1 and nums2 cannot be both empty.

//Example 1:

//nums1 = [1, 3]
//nums2 = [2]

//The median is 2.0


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const total = nums1.length + nums2.length;
    const limit = Math.floor(total / 2) + 1;
    let i = 0, j = 0, prev, last

    while(i + j < limit) {
        if (last !== undefined) {
        prev = last;
        }
        if (nums1[i] < nums2[j] || j === nums2.length) {
            last = nums1[i++];
        } else {
            last = nums2[j++];
        }
    }

    return total % 2 === 0 ? (prev + last) / 2 : last;
};


//#9 Find All Numbers Disappeared in an Array

//Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), 
//some elements appear twice and others appear once.

//Find all the elements of [1, n] inclusive that do not appear in this array.

//Could you do it without extra space and in O(n) runtime? You may assume the 
//returned list does not count as extra space.

//Example:

//Input:
//[4,3,2,7,8,2,3,1]

//Output:
//[5,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // Unique elements array
    let newArr = [...new Set(nums)];

    // Full elements array
    let fullArr = Array.from(new Array(nums.length + 1).keys()).slice(1);
    
    return fullArr.filter(item=>{
        return newArr.indexOf(item) === -1
    });
};


// #10 Diameter of Binary Tree


//Given a binary tree, you need to compute the length of the diameter of the 
//tree. The diameter of a binary tree is the length of the longest path between
// any two nodes in a tree. This path may or may not pass through the root.

//Example:
//Given a binary tree
//          1
//         / \
//        2   3
//       / \     
//      4   5    
//Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

//Note: The length of path between two nodes is represented by the number of 
//edges between them.

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
function diameterOfBinaryTree(root) {
    let max = 0
    
    function maxDepth(root) {
        if (root === null) return 0 // if our root(num) is null then there is no path. return 0/null
        let left = maxDepth(root.left) // Assign the left  of tree to LEFT; this will be easier to call it instead of writing "maxDepth(root.left)" each time
        let right = maxDepth(root.right) //Same above
    
         max = Math.max(max, left + right) //if the path doesn't go through the root we just get the max of them
         return Math.max(left, right) + 1 // the path goes through the root so we add 1(for the root)
    }
     //since we don't know if the path will go through the root or not we will have to get the max between(path that visits the root, or the path that doesn't go through the root.)
    maxDepth(root)
    return max
};

//# 11 Shortest Unsorted Continous SubArray

//Given an integer array, you need to find one continuous subarray that if you 
//only sort this subarray in ascending order, then the whole array will be 
//sorted in ascending order, too.

//You need to find the shortest such subarray and output its length.

//Example 1:
//Input: [2, 6, 4, 8, 10, 9, 15]
//Output: 5
//Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make 
//the whole array sorted in ascending order.
//Note:
//Then length of the input array is in range [1, 10,000].
//The input array may contain duplicates, so ascending order here means <=.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    // method - check both directions at once, move pointer if numbers are counting in the wrong direction
    let l = nums.length-1, r = 0;
    let min = nums[l], max = nums[r];

    for(let i = 0; i < nums.length; i++) {
        let j = nums.length-1-i;

        if(nums[i] < max) { r = i }
        if(nums[j] > min) { l = j }

        max = nums[i] > max ? nums[i] : max;
        min = nums[j] < min ? nums[j] : min;
    }
	// r-l=0 for single number list, r-l=-1 for already sorted list
    return r-l < 1 ? 0 : r-l+1;

//#12 Palindromic Substrings

//Given a string, your task is to count how many palindromic substrings in 
//this string.

//The substrings with different start indexes or end indexes are counted as 
//different substrings even they consist of same characters.

//Example 1:

//Input: "abc"
//Output: 3
//Explanation: Three palindromic strings: "a", "b", "c".
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count1 = 0
    function count(left,right){
        while(left>-1&&right<s.length&&s[left]==s[right]){
            count1++
            left--
            right++
        }
    }

    for(var i=0;i<s.length;i++){
        count(i,i);
        count(i,i+1)
    }
    return count1
}


//#13 Top K Frequent Elements

//Given a non-empty array of integers, return the k most frequent elements.

//Example 1:

//Input: nums = [1,1,1,2,2,3], k = 2
//Output: [1,2]
//Example 2:

//Input: nums = [1], k = 1
//Output: [1]
//Note:

//You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
//Your algorithm's time complexity must be better than O(n log n), where n is 
//the array's size.
//It's guaranteed that the answer is unique, in other words the set of the top k 
//frequent elements is unique.
//You can return the answer in any order.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    /**
     * The goal is to build a map that associates the numbers 
     * with their occurences. With the map, we can transform 
     * it into a sorted array in descending order and return 
     * the first k elements.
     * 
     * Time complexity: O(nlog(n))
     * Space complexity: O(n)
     */
    const map = nums.reduce((map, num) => {
        const occurence = map.get(num) || 0;
        map.set(num, occurence + 1);
        return map;
    }, new Map());
    
    return Array.from(map)
        .sort((a, b) => b[1] - a[1])
        .map(item => item[0])
        .slice(0, k);
};

//#14 Generate Parentheses

//Given n pairs of parentheses, write a function to generate all combinations 
//of well-formed parentheses.

//For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = []
    generate(n,n,[]);
    
    //backtracking    
    function generate(left,right,sets){
        if(left>right){
            return true;
        }
        if(!left&&!right&&sets.length===n*2){
            result.push(sets.join(''));
        }
        if(left){
            sets.push('(');
            generate(left-1,right,sets);
            sets.pop();
        }
        if(right>left){
            sets.push(')');
            generate(left,right-1,sets);
            sets.pop(); 
        }
    }

    return result
}

//# 14 Decode String

//Given an encoded string, return its decoded string.

//The encoding rule is: k[encoded_string], where the encoded_string 
//inside the square brackets is being repeated exactly k times. Note that k is 
//guaranteed to be a positive integer.

//You may assume that the input string is always valid; No extra white spaces, 
//square brackets are well-formed, etc.

//Furthermore, you may assume that the original data does not contain any digits 
//and that digits are only for those repeat numbers, k. For example, there 
//won't be input like 3a or 2[4].

//Examples:

//s = "3[a]2[bc]", return "aaabcbc".
//s = "3[a2[c]]", return "accaccacc".
//s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

var decodeString = function(s) {
    while(s.indexOf('[')!=-1) { // base case, breaks when there's no bracket found
        let left = s.lastIndexOf('['); // left position of the inner-most `[`
        let right = left + s.substring(left).indexOf(']'); // right positio of the inner-most `]`
        let word = s.substring(left+1, right); // between them is the string
        let count = "";
        while(s[left-1] >= 0 && s[left-1]<=9) { // try to find a valid number
            left--;
            count = s[left] + count;
        }
        s = s.substring(0,left) + word.repeat(count) + s.substring(right+1); // put them all togher and repeat :)
    }
    return s;
};