function invertBinaryTree(tree) {
  // Write your code here.
	const queue = [tree];
	while(queue.length) {
		const current = queue.shift();
		if(current === null) continue;
		swapLeftAndRight(current);
		queue.push(current.left);
		queue.push(current.right);
	}
}

function swapLeftAndRight(tree) {
	const left = tree.left;
	tree.left = tree.right;
	tree.right = left;
}