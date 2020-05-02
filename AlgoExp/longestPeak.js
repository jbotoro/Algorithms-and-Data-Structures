function longestPeak(array) {
  // Write your code here.
	let longestPeakLength = 0;
	let i = 1;
	while (i < array.length - 1){
        // check if num before  and after current position are less than num at 
        //current position to determine if current position is a peak
		const isPeak = array[i-1] < array[i] && array[i+1] < array[i];
		if(!isPeak){
            //if not a peak can skip on down to the next element in array
			i++;
			continue;
		}
        // once peak is found start going left and right until you break the
        // constantly decreasing criteria
		let leftIdx = i - 2;
		while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]){
			leftIdx--;
		}
		
		let rightIdx = i + 2;
		while(rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]){
			rightIdx++;
        }
        
        // once the right and left idxs no longer are decreasing we calc
        //current peak length;
		
        const currentPeakLength = rightIdx - leftIdx - 1;
        // we then check against the current peak to the longest and set longest
        // to the larger of the two
        longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
        // once a peak length has been calculated reset i to the right Idx
        // because that way you skip over the previous peak that has already been
        // calculated
		i = rightIdx;
	}
	return longestPeakLength;
}