// Dash Insert
// Have the function DashInsert(str) insert dashes ('-') between each two odd 
//numbers in str. For example: if str is 454793 the output should be 4547-9-3. 
//Don't count zero as an odd number.

// Examples
// Input: 99946
// Output: 9-9-946
// Input: 56730
// Output: 567-30


3
function DashInsert(str) { 

  
  // convert the string into an array
  // with each element being a single number
  var arr = str.split('');
  
  // loop through the array of numbers and add a dash if 
  // the current number and the next number are odd
  // NOTE: to determine if a number is odd we  
  // divide by 2 and check if there is a remainder
  // e.g. 4 / 2 = 0 remainder
  // e.g. 5 / 2 = 1 remainder
  // e.g. 9 / 2 = 1 remainder
  for (var i = 0; i < str.length-1; i++) {
    if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0) {
      arr[i] = arr[i] + '-';
    }
  }
  
  // join the numbers into a final string
  return arr.join('');
         
}