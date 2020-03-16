/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

 // Write a function that reverses a string. The input string is given as an array of characters char[].
var reverseString = function(s) {
  for (let i=0, j=s.length-1; i<j; i++, j--) {
        const x = s[i]; const y = s[j];
        s[i] = y; s[j] = x;
    }
};