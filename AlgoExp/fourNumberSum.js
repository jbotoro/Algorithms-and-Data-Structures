function fourNumberSum(array, targetSum) {
  // Write your code here.
	const allPairSums = {};
	const quadruplets = [];
	for(let i = 1; i < array.length - 1; i++){
		for(let j = i + 1; j < array.length; j++){
			const currentSum = array[i] + array[j];
			const difference = targetSum - currentSum;
			if(difference in allPairSums){
				for(const pair of allPairSums[difference]){
					quadruplets.push(pair.concat([array[i], array[j]]))
				}
			}
		}
		for (let k = 0; k < i; k++){
			const currentSum = array[i] + array[k];
			if(!(currentSum in allPairSums)){
				allPairSums[currentSum] = [[array[k], array[i]]]
			} else {
				allPairSums[currentSum].push([array[k], array[i]])
			}
		}
	}
	return quadruplets;
}