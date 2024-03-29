// Group Totals

// Have the function GroupTotals(strArr) read in the strArr parameter containing 
// key:value pairs where the key is a string and the value is an integer. 
// Your program should return a string with new key:value pairs separated by a 
// comma such that each key appears only once with the total values summed up.

// For example: if strArr is ["B:-1", "A:1", "B:3", "A:5"] then your program 
// should return the string A:6,B:2.

// Your final output string should return the keys in alphabetical order. Exclude 
// keys that have a value of 0 after being summed up.

// Examples
// Input: ["X:-1", "Y:1", "X:-4", "B:3", "X:5"]
// Output: B:3,Y:1
// Input: ["Z:0", "A:-1"]
// Output: A:-1

function GroupTotals(strArr) { 

  // code goes here  

  
  let map = strArr
  .map(str => str.split(':'))
  .map( str => [str[0], parseInt(str[1])])
  .reduce( (acc,curr) => (acc[curr[0]] = (acc[curr[0]] || 0) + curr[1], acc), {});
  

  let sortedTotal = Object.keys(map)
  .sort()
  .filter(pair => map[pair] !== 0)
  .map( pair => `${pair}:${map[pair]}`)
  .join(',')

  return sortedTotal;
  


}