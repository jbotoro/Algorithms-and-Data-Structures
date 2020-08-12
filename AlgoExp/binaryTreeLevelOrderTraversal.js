// Given a binary tree, return the level order traversal of its nodes' values. 
//(ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    
    const order = [];
    const queue = [[root]];

    while (queue.length) {
        const currItems = queue.pop();
        const nextItems = [];
        const currLevel = [];
        
        for (const item of currItems) {
            currLevel.push(item.val);
            item.left && nextItems.push(item.left);
            item.right && nextItems.push(item.right);
        }
        
        order.push(currLevel);
        nextItems.length && queue.push(nextItems);
    }
    
    return order;
};
