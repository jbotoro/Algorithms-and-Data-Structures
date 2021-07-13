// Moving Median

// Have the function MovingMedian(arr) read the array of numbers stored in arr 
// which will contain a sliding window size, N, as the first element in the array 
// and the rest will be a list of numbers. Your program should return the Moving 
// Median for each element based on the element and its N-1 predecessors, where N 
// is the sliding window size. The final output should be a string with the moving 
// median corresponding to each entry in the original array separated by commas.

// Note that for the first few elements (until the window size is reached), 
// the median is computed on a smaller number of entries. For example: 
// if arr is [3, 1, 3, 5, 10, 6, 4, 3, 1] then your program should 
// output "1,2,3,5,6,6,4,3"

// Examples
// Input: [5, 2, 4, 6]
// Output: 2,3,4
// Input: [3, 0, 0, -2, 0, 2, 0, -2]
// Output: 0,0,0,0,0,0,0

function MovingMedian(arr) { 

    let n = arr.shift();
    
    let results = [];
    
    for (let i = 0; i < arr.length; i++) {
        let begin = ( i + 1 - n) > 0 ? (i + 1 - n) : 0; 
        let slice = arr.slice(begin, i + 1);
        results.push(getMedian(slice));
    }
    
    return results.join(',');
         
}

function getMedian(arr) {
    arr.sort((a,b) => a - b);
    if (arr.length % 2 === 1) {
        // odd, return middle
        return (arr[ Math.floor (arr.length / 2 )]);
    } else {
        // even, return mean of middle two elements
        return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    }
}