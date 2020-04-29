function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	// have variable to keep track of current smallest;
	// for loop over bigger array and check
	
	//sort arrays to make it much easier

	arrayOne.sort((a,b) => a-b)
	arrayTwo.sort((a,b) => a-b)
	
	// assign variables to keep track of pointers for both arrays
	let idxOne = 0;
	let idxTwo = 0;
	
	// assign variables to keep track of current difference and current smallest difference
	
	let smallest = Infinity;
	let current = Infinity;
	let smallestPair = [];
	
	// while loop to make sure we stop once we reach the end of either array
	
	while( idxOne < arrayOne.length && idxTwo < arrayTwo.length){
		//variables to keep track of current value at current idx for array one and array two
		let firstNum = arrayOne[idxOne];
		let secondNum = arrayTwo[idxTwo];
		
		if(firstNum < secondNum){
			// since both arrays are sorted you want to get as close to having firstnum = secondnum,
			// if you know they are sorted you can increment the one with smaller number at a given position
			current = secondNum - firstNum;
			idxOne++;
		} else if( secondNum < firstNum){
			current = firstNum - secondNum;
			idxTwo++;
		} else {
			// if firstnum is equal to second num the difference is 0 and will be the smallest pair so return
			return [firstNum, secondNum]
		}
		
		if(smallest > current){
			smallest = current;
			smallestPair = [firstNum, secondNum]
		}
	}
	return smallestPair;
}