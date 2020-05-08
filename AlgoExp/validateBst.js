// This is an input class. Do not edit.
// given a binary search tree as input write a function to determine if 
// it is a valid BST
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Write your code here.
	return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
	if(tree === null) return true;
	if(tree.value < minValue || tree.value >= maxValue) return false;
	const leftIsValid = validateBstHelper(tree.left,minValue,tree.value);
	return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue)
}