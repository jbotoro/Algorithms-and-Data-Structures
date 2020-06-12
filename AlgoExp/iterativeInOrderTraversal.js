function iterativeInOrderTraversal(tree, callback) {
    let previousNode = null;
	let currentNode = tree;
	
	while (currentNode !== null) {
		let nextNode;
		if (previousNode === null || previousNode === currentNode.parent) {
			if (currentNode.left !== null) {
				nextNode = currentNode.left;
			} else {
				callback(currentNode);
				nextNode = currentNode.right !== null ? currentNode.right : currentNode.parent;
			}
		} else if (previousNode === currentNode.left) {
			callback(currentNode);
			nextNode = currentNode.right !== null ? currentNode.right : currentNode.parent;
		} else {
			nextNode = currentNode.parent;
		}
		previousNode = currentNode;
		currentNode = nextNode;
	}
}