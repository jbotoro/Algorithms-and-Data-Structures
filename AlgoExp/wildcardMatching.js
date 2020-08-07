// Given an input string (s) and a pattern (p), implement wildcard pattern 
//matching with support for '?' and '*'.

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

// Note:

// s could be empty and contains only lowercase letters a-z.
// p could be empty and contains only lowercase letters a-z, and characters 
//like ? or *.
// Example 1:

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input:
// s = "aa"
// p = "*"
// Output: true
// Explanation: '*' matches any sequence.
// Example 3:

// Input:
// s = "cb"
// p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not 
//match 'b'.
// Example 4:

// Input:
// s = "adceb"
// p = "*a*b"
// Output: true
// Explanation: The first '*' matches the empty sequence, while the second '*' 
//matches the substring "dce".
// Example 5:

// Input:
// s = "acdcb"
// p = "a*c?b"
// Output: false
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let dp = Array(s.length+1).fill(null).map(()=>Array(p.length+1).fill(false));
    dp[0][0] = true;

    // initialize first column (string)
    for (let i=1;i<=s.length;i++) {
        dp[i][0] = false;
    }

    // initialize first row (pattern) 
    for (let i=1;i<=p.length;i++) {
        dp[0][i] = dp[0][i-1] && p[i-1] == "*";
    }
    
    for (let i=1;i<=s.length;i++) {
        for (let j=1;j<=p.length;j++) {
            if (p[j-1]=='*') {
                dp[i][j] = dp[i-1][j] || dp[i][j-1]; // look top or left
            } else if (s[i-1] == p[j-1] || p[j-1]=='?') {
                dp[i][j] = dp[i-1][j-1]; // inherit from previous result
            }
        }
    }
    return dp[s.length][p.length]
}