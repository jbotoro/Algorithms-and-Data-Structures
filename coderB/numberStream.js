// Number Stream

// Have the function NumberStream(str) take the str parameter being passed which 
// will contain the numbers 2 through 9, and determine if there is a consecutive 
// stream of digits of at least N length where N is the actual digit value. If so, 
// return the string true, otherwise return the string false. For example: if str 
// is "6539923335" then your program should return the string true because there 
// is a consecutive stream of 3's of length 3. The input string will always 
// contain at least one digit.

// Examples
// Input: "5556293383563665"
// Output: false
// Input: "5788888888882339999"
// Output: true

function NumberStream(str) { 
  for (var i = 0; i <str.length; i++) {
    var count = 0;
    var current = parseInt(str[i]);
    for (var j = i; j < str.length; j++) {
      if(parseInt(str[j]) === current) {
        count++;
        if(count === current) {
          return true;
        } 
      } else {
          break;
      }
    }
  }
  return false;  
}