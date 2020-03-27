// #1 Valid Palindrome

//Given a string, determine if it is a palindrome, considering only alphanumeric 
//characters and ignoring cases.

//Note: For the purpose of this problem, we define empty string as valid palindrome.

//Example 1:

//Input: "A man, a plan, a canal: Panama"
//Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // replace all non letter characters with empty space to remove any spaces, underscores etc.
    var strippedString = s.replace(/\W/g, '');
    //reverse string
    var reversedString = strippedString.split('').reverse().join('');
    // make sure both are lower cased
    return strippedString.toLowerCase() == reversedString.toLowerCase();
};
