//Serialization is the process of converting a data structure or object into a 
//sequence of bits so that it can be stored in a file or memory buffer, or 
//transmitted across a network connection link to be reconstructed later in the 
//same or another computer environment.

//Design an algorithm to serialize and deserialize a binary tree. There is no 
//restriction on how your serialization/deserialization algorithm should work. 
//You just need to ensure that a binary tree can be serialized to a string and 
//this string can be deserialized to the original tree structure.

//Example: 

//You may serialize the following tree:

//    1
//   / \
//  2   3
//     / \
//    4   5

//as "[1,2,3,null,null,4,5]"


var serialize = function(root) {
    const stack = [root], result = [];
    while (stack.length) {
        const curr = stack.pop();
        if (curr) {
            result.push(curr.val);
            stack.push(curr.right);
            stack.push(curr.left);
        } else {
            result.push('#');
        }
    }
    return result.join(',')
};
/**
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = data.split(',');
    let idx = -1;
    const dfs = () => {
        if (isNaN(data[++idx])) {
            return null;
        }
        const root = new TreeNode(data[idx]);
        root.left = dfs();
        root.right = dfs();
        return root;
    }
    return dfs();
};