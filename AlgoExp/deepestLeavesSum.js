// Given a binary tree, return the sum of values of its deepest leaves.
 

// Example 1:



// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
 

// Constraints:

// The number of nodes in the tree is between 1 and 10^4.
// The value of nodes is between 1 and 100.

// recursive solution

var deepestLeavesSum = function(root, arr = [], depth = 0) {
    if (root === null) return;
    
    arr[depth] = (arr[depth] || 0) + root.val;
    deepestLeavesSum(root.left, arr, depth + 1);
    deepestLeavesSum(root.right, arr, depth + 1);
    
    return arr[arr.length -1];
};