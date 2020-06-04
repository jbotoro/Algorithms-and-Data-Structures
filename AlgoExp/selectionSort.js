function selectionSort(array) {
  // Write your code here.
	let startIdx = 0;
	while( startIdx < array.length - 1){
		let smallestIdx = startIdx;
		for (let i = startIdx + 1; i < array.length; i++){
			if(array[smallestIdx] > array[i]) smallestIdx = i;
		}
		swap(startIdx, smallestIdx, array)
		startIdx++;
	}
	return array
}

function swap(i,j,array) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}