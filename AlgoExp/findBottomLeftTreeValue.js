// Given a binary tree, find the leftmost value in the last row of the tree.

// Example 1:
// Input:

//     2
//    / \
//   1   3

// Output:
// 1
// Example 2:
// Input:

//         1
//        / \
//       2   3
//      /   / \
//     4   5   6
//        /
//       7

// Output:
// 7
// Note: You may assume the tree (i.e., the given root node) is not NULL.

var findBottomLeftValue = function(root) {
    let level = [];
    const dfs = (node, height) => {
        if(!node) return;
        if(!level[height]) level[height] = [];
        level[height].push(node.val);
        dfs(node.left, height + 1);
        dfs(node.right, height + 1);
    }
    dfs(root, 0);
    return level.pop().shift();
};