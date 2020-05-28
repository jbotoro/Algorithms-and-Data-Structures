function maxPathSum(tree) {
  // Write your code here.
	const [_, maxSum] = [...findMaxSum(tree)]
	return maxSum;
}

function findMaxSum(tree){
	if(tree === null) return [0, 0];
	
	const[leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
	const[rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
	
	const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch)
	
	const {value} = tree;
	const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
	const maxSumAsRootNode = Math.max(leftMaxSumAsBranch + value + rightMaxSumAsBranch, maxSumAsBranch)
	const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode)
	
	return [maxSumAsBranch, maxPathSum]
}