// Longest Increasing Sequence

// Have the function LongestIncreasingSequence(arr) take the array of positive 
// integers stored in arr and return the length of the longest increasing 
// subsequence (LIS). A LIS is a subset of the original list where the numbers 
// are in sorted order, from lowest to highest, and are in increasing order. 
// The sequence does not need to be contiguous or unique, and there can be several 
// different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible 
// LIS is [3, 5, 6], and another is [1, 6]. For this input, your program should 
// return 3 because that is the length of the longest increasing subsequence.

// Examples
// Input: [9, 9, 4, 2]
// Output: 1
// Input: [10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]
// Output: 7

function LongestIncreasingSequence(arr) { 
    var sets = [[]]
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0, len = sets.length; j < len; j++) {
            if(sets[j].length === 0){
                sets.push(sets[j].concat(arr[i]))
            }
            else if(arr[i] > Math.max(...sets[j])){
                sets.push(sets[j].concat(arr[i]))
            }           
        }
    } 
    return Math.max(...sets.map(x => x.length))
}