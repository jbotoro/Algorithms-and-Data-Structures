// Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)

// If there are no nodes with an even-valued grandparent, return 0.

 

// Example 1:



// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 18
// Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
 

// Constraints:

// The number of nodes in the tree is between 1 and 10^4.
// The value of nodes is between 1 and 100.

// Recursive solution

let sum = 0;
getNumbers(root, 0);
function getNumbers(node) {
    if (node) {
        if (node.val % 2 === 0) {
            if (node.left?.left?.val) {
                sum += node.left.left.val;
            }
            if (node.left?.right?.val) {
                sum += node.left.right.val;
            }
            if (node.right?.right?.val) {
                sum += node.right.right.val;
            }
            if (node.right?.left?.val) {
                sum += node.right.left.val;
            }
        }
        getNumbers(node.left);
        getNumbers(node.right);
    }
}

return sum;