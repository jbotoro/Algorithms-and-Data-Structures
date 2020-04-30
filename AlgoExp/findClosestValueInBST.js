function findClosestValueInBst(tree, target, closest = Infinity) {
  // Write your code here.
	if(!tree){
		return closest;
	}
	if(Math.abs(tree.value - target) < Math.abs(closest - target)){
		closest = tree.value;
	}
	
	if(tree.value < target){
		return findClosestValueInBst(tree.right,target,closest)
	} else if (tree.value > target){
		return findClosestValueInBst(tree.left,target,closest)
	} else{
		return closest;
	}
}