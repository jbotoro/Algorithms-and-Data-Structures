// Given a binary search tree, write a function kthSmallest to find the kth 
//smallest element in it.

 

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3
// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to 
//find the kth smallest frequently? How would you optimize the kthSmallest routine?

 

// Constraints:

// The number of elements of the BST is between 1 to 10^4.
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let vals = [];
    (function dfs(node) {
        if (vals.length !=k) { //no need to keep going after reach k-th number
        if(node.left) dfs(node.left); //go left first
        vals.push(node.val); //finished going left, now start adding values
        if (node.right) dfs(node.right); //if have right, go there and repeat process
        }  
    })(root) // IFFE Immediately Invoking Function Expression, starting from root.
    return vals[k-1]; //return element, but as i mentioned in the descript, 
    //don't need this full array, just the k-th elm
};