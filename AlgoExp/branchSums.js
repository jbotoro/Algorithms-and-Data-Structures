// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
	let res = [];
	calculateBranchSums(root,0,res)
	return res;
}

function calculateBranchSums(node,runningSum, res){
	if(!node) return;
	
	const newRunningSum = runningSum + node.value;
	if(!node.left && !node.right){
		res.push(newRunningSum);
		return;
	}
	calculateBranchSums(node.left,newRunningSum, res);
	calculateBranchSums(node.right, newRunningSum, res);
}