function twoNumberSum(array, targetSum) {
  // Write your code here.
	for(let i = 0; i < array.length; i++){
		for(let j = i + 1; j < array.length; j++ ){
			let currentSum = array[i] + array[j];
			if(currentSum === targetSum) return [array[i], array[j]]
		}
	}
	return []
}