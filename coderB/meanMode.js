// Mean Mode

// Have the function MeanMode(arr) take the array of numbers stored in arr and 
// return 1 if the mode equals the mean, 0 if they don't equal each other 
// (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). 
// The array will not be empty, will only contain positive integers, and will not 
// contain more than one mode.

// Examples
// Input: [1, 2, 3]
// Output: 0
// Input: [4, 4, 4, 6, 2]
// Output: 1

function MeanMode(arr) { 

  let hashTable = {};
  let mean = arr.reduce((element, currentSum) => element + currentSum) / arr.length;
  let mode;
  
  for (let i=0; i<arr.length; i++){
      if (hashTable[arr[i]]) {
          hashTable[arr[i]] ++;
      }
      else {
          hashTable[arr[i]] = 1;
      }
  }
  
  let greatestFreq = 0;
  for (let num in hashTable) {
      if (hashTable[num] > greatestFreq) {
          greatestFreq = hashTable[num];
          mode = parseInt(num);
      }
  }
  
  if (mean === mode) {
      return 1;
  }
  return 0; 
         
}