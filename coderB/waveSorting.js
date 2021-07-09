// Wave Sorting

// Have the function WaveSorting(arr) take the array of positive integers stored 
// in arr and return the string true if the numbers can be arranged in a wave 
// pattern: a1 > a2 < a3 > a4 < a5 > ..., otherwise return the string false. 
// For example, if arr is: [0, 1, 2, 4, 1, 4], then a possible wave ordering of 
// the numbers is: [2, 0, 4, 1, 4, 1]. So for this input your program should return 
// the string true. The input array will always contain at least 2 elements. 
// More examples are given below as sample test cases.

// Examples
// Input: [0, 1, 2, 4, 1, 1, 1]
// Output: false
// Input: [0, 4, 22, 4, 14, 4, 2]
// Output: true

JAVASCRIPT
VIEW CHALLENGE
1
function WaveSorting(arr) {
    //thinking about it, the desired result will be possible so long as we don't have any one number
    //more times than other numbers to break it up
    
    //get the total number of numbers
    let length = arr.length;
    
    //get the number of entries for each number
    let countObj = {};
    arr.forEach(val => {
        if (!countObj[val]) {
            countObj[val] = 1;
        } else {
            countObj[val]++;
        }
    });
    
    //make an array of our results, so we can find the max
    let countArr = [];
    for (let key in countObj) {
        countArr.push(countObj[key]);
    }
    
    //find the max - don't need to use apply() any more!
    let maxCount = Math.max(...countArr);

    return maxCount > length/2 ? false : true;

}