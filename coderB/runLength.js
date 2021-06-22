// Run Length
// Have the function RunLength(str) take the str parameter being passed and return 
// a compressed version of the string using the Run-length encoding algorithm. 
// This algorithm works by taking the occurrence of each repeating character and 
// outputting that number along with a single character of the repeating sequence.
//  For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any 
//  numbers, punctuation, or symbols.

// Examples
// Input: "aabbcde"
// Output: 2a2b1c1d1e
// Input: "wwwbbbw"
// Output: 3w3b1w

function RunLength(str) { 

  var i = 0;

  // final compressed string
  var rle = "";
  
  // loop through entire string building 
  // the new compressed version
  while (i < str.length) {
    
    // get this current character
    var c = str[i];
    
    // the index of the next character
    var j = i + 1;
    
    // compressed version of the current character
    // and its count which starts at 1
    var compressed = [1, c];
    
    // if the next character is the same, add 1 to the count
    // e.g. eeed => [1, e] becomes [2, e] becomes [3, e] then stops
    while (j < str.length) { 
      if (str[j] === c) { compressed[0] += 1; } 
      else { break; }
      j++;
    }
    
    // add this compressed part of the string to the final
    // compressed version of the string
    rle += compressed.join('');

    // start the loop at the next character now
    i = j;
         
  }
  
  return rle;
         
}