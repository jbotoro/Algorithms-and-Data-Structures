function moveElementToEnd(array, toMove) {
  // Write your code here.
	//pointer for front of array
	let i = 0;
	// pointer for back of array
	let j = array.length - 1;
	
	// while pointers havent crossed paths
	while(i < j){
		//dont move any nums that equal the toMove value instead decrement back pointer to skip
		while(i < j && array[j] === toMove)j--;
		// if left pointer finds toMove Value swap that values idx from the left pointer to the idx of the right pointer
		// i.e. swap in place within the array using helper function swap
		if(array[i] === toMove) swap(i,j,array);
		// increment left pointer after checking if either array[i] or array[j] === toMove
		i++;
	}
	return array;
}

function swap(i,j,array) {
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}