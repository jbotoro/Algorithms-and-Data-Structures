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

/**
 * @param {number} n
 * @return {string[]}
 */

//Write a program that outputs the string representation of numbers from 1 to n.
// But for multiples of three it should output “Fizz” instead of the number and 
//for the multiples of five output “Buzz”.For numbers which are multiples of both 
// three and five output “FizzBuzz”.
var fizzBuzz = function (n) {
    return new Array(n).fill(0).map((a, b) => (++b % 3 ? '' : 'Fizz') + (b % 5 ? '' : 'Buzz') || '' + b)
};

