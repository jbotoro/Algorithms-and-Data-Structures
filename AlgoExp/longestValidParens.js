//Longest Valid Parentheses

//Given a string containing just the characters '(' and ')', find the length of 
//the longest valid (well-formed) parentheses substring.

//Example 1:

//Input: "(()"
//Output: 2
//Explanation: The longest valid parentheses substring is "()"
//Example 2:

//Input: ")()())"
//Output: 4
//Explanation: The longest valid parentheses substring is "()()"




/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let longest = 0
    let stack=[-1]
    
    for(let i=0;i<s.length;i++){
        let char = s[i]
    
        if(char === '('){
        stack.push(i)
        continue
        }

        stack.pop()
        if(!stack.length) stack.push(i)
        else longest = Math.max((i - stack[stack.length-1]),longest)
    }
    return longest
};