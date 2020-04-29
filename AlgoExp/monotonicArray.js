function isMonotonic(array) {
  // Write your code here.
	
	// array with 2 elements always will be monotonic
	if(array.length <= 2) return true;
	
	// use variable to track if decreasing or increasing
	// first pair of numbs will tell you which direction to track
	let direction = array[1] - array[0];
	for(let i = 2; i < array.length; i++){
		// edge case where a pair is neither increasing or decreasing
		// continue moving down array until direction is either positive
		// or negative
		if(direction === 0) {
			direction = array[i] - array[i-1]
			continue
		}
		// once direction is established then start passing in each pair
		// to helper function
		// helper function to determine is direction is broken
		if (breaksDirection(direction, array[i-1], array[i])){
			return false;
		}
	}
	// if false is never returned from break direction function it must
	// be monotonic so return true
	
	return true;
}

function breaksDirection(direction, previousInt, currentInt){
	const difference = currentInt - previousInt;
	// if increasing and difference is less than zero than its not increasing
	// so return true to then return false in main function
	if( direction > 0) return difference < 0;
	// if decreasing same as above but check if difference > 0
	return difference > 0;
}