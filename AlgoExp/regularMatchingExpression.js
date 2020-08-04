
// Given an input string (s) and a pattern (p), implement regular expression 
//matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Note:

// s could be empty and contains only lowercase letters a-z.
// p could be empty and contains only lowercase letters a-z, and characters like
// . or *.
// Example 1:

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input:
// s = "aa"
// p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, 
//by repeating 'a' once, it becomes "aa".
// Example 3:

// Input:
// s = "ab"
// p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
// Example 4:

// Input:
// s = "aab"
// p = "c*a*b"
// Output: true
// Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore,
// it matches "aab".
// Example 5:

// Input:
// s = "mississippi"
// p = "mis*is*p*."
// Output: false

var isMatch = function (s, p) {
	let up = new Array(p.length).fill(null)
	let down = new Array(s.length).fill(null)
	up[0] = true

    for (let i = 1; i <= p.length; i++) {
        if (p[i - 1] === "*") {
        up[i] = up[i - 2]
        } else {
        up[i] = false
        }
    }
    down[0] = false

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === "*") {
            if (down[j - 2] === true) {
            down[j] = true
            } else if (
            (p[j - 2] === s[i - 1] || p[j - 2] === ".") &&
            up[j] === true
            ) {
            down[j] = true
            } else {
            down[j] = false
            }
        } else if (p[j - 1] === s[i - 1] || p[j - 1] === ".") {
            down[j] = up[j - 1]
        } else {
            down[j] = false
        }
        }
        up = down
        down = []
        down[0] = false
    }

    return up[up.length - 1]
}