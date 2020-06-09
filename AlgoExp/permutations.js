function getPermutations(array) {
  // Write your code here.
	const permutations = [];
	permutationsHelper(array, [], permutations);
	return permutations;
}

function permutationsHelper(array, currentPermutation, permutations){
	if (!array.length && currentPermutation.length) {
		permutations.push(currentPermutation);
	} else {
		for (let i = 0; i < array.length; i++){
			const newArray = array.slice(0,i).concat(array.slice(i + 1));
			const newPermutation = currentPermutation.concat([array[i]]);
			permutationsHelper(newArray, newPermutation, permutations)
		}
	}
}