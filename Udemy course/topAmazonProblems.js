//# 1 Longest Substring without Repeating Characters

//Given a string, find the length of the longest substring without repeating characters.

//Example 1:

//Input: "abcabcbb"
//Output: 3 
//Explanation: The answer is "abc", with the length of 3. 

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    const map = {};
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}

//#2 Number of Islands

//Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
//An island is surrounded by water and is formed by connecting adjacent lands 
//horizontally or vertically. You may assume all four edges of the grid are all 
//surrounded by water.

//Example 1:

//Input:
//11110
//11010
//11000
//00000

//Output: 1

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    
    function depthSearch(x, y) {
        if (grid[x][y] === '1') {
            grid[x][y] = '0';
        } else {
            return;
        }

        if (x < grid.length - 1) {
            depthSearch(x+1, y);
        }
        
        if (y < grid[x].length - 1) {
            depthSearch(x, y+1);
        }
        
        if (x > 0 && x < grid.length) {
            depthSearch(x-1, y);
        }
        
        if (y > 0 && y < grid[x].length) {
            depthSearch(x, y-1);
        }
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                depthSearch(i, j);
            }
        }
    }
    
    return count;
};

//#3 Copy List with Random Pointer

//A linked list is given such that each node contains an additional random pointer 
//which could point to any node in the list or null.

//Return a deep copy of the list.

//The Linked List is represented in the input/output as a list of n nodes. Each 
//node is represented as a pair of [val, random_index] where:

//val: an integer representing Node.val
//random_index: the index of the node (range from 0 to n-1) where random pointer 
//points to, or null if it does not point to any node.
 

//Example 1:


//Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
//Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) {
        return null;
    }
    const clones = new Map();
    let n = head;
    while(n) {
        clones.set(n, new Node(n.val));
        n = n.next
    }
    n = head;
    while(n) {
        clones.get(n).next = clones.get(n.next) || null;
        clones.get(n).random = clones.get(n.random) || null;
        n = n.next
    }
    return clones.get(head);
};

