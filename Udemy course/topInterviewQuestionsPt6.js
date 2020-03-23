// #1 Symmetric Tree 

//Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree[1, 2, 2, 3, 4, 4, 3] is symmetric:
// But the following [1,2,2,null,3,null,3] is not:

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// Recursive solution 
var isSymmetric = function (root) {
    if (!root) return root;

    // isMirrored function
    const isMirrored = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        return (left.val === right.val &&
            isMirrored(left.left, right.right) &&
            isMirrored(left.right, right.left))
    }
    // traverse
    return isMirrored(root.left, root.right);
};