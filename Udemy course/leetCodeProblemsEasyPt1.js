/// Letter Combinations of a Phone Number

//Given a string containing digits from 2-9 inclusive, return all possible 
//letter combinations that the number could represent.

//A mapping of digit to letters (just like on the telephone buttons) is given 
//below. Note that 1 does not map to any letters.

//Input: "23"
//Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].


/**
 * @param {string} digits
 * @return {string[]}
 */
const pmap = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'].map(v => v.split(''))

// i keeps track of position in digits we're at, starts at 0 by default
const letterCombinations = (digits, i = 0) => {
    // catch empty strings and terminate at final index
    if (i >= digits.length - 1) return pmap[digits[i] - 2] || []
    // iterate through new digit options, reduce can resize array to any size from []
    return pmap[digits[i] - 2].reduce((outputArray, thisLetter) => {
        letterCombinations(digits, i + 1) // get all next digits options
        // add to all of them this letter
        // push combined result as new array entry
            .forEach(laterLetters => outputArray.push(thisLetter + laterLetters))  
        return outputArray // move onto next reduce loop (next "thisLetter")
    }, []) // default & initial outputArray value
}