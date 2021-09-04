// Hamming Distance

// Have the function HammingDistance(strArr) take the array of strings stored in 
// strArr, which will only contain two strings of equal length and return the 
// Hamming distance between them. The Hamming distance is the number of positions 
// where the corresponding characters are different. For example: if strArr is 
// ["coder", "codec"] then your program should return 1. The string will always 
// be of equal length and will only contain lowercase characters from the alphabet 
// and numbers.

// Examples
// Input: ["10011", "10100"]
// Output: 3
// Input: ["helloworld", "worldhello"]
// Output: 8

function HammingDistance(strArr) { 

  let count = 0;
  let first = strArr[0];
  let second = strArr[1];
  for(let i = 0; i < first.length; i++){
    if(first[i] !== second[i]) {
      count++
    }
  }
  return count

}