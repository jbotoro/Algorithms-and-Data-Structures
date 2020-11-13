// You are given two strings s1 and s2 of equal length consisting of letters "x" and "y" only. Your task is to make these two strings equal to each other. You can swap any two characters that belong to different strings, which means: swap s1[i] and s2[j].

// Return the minimum number of swaps required to make s1 and s2 equal, or return -1 if it is impossible to do so.

 

// Example 1:

// Input: s1 = "xx", s2 = "yy"
// Output: 1
// Explanation: 
// Swap s1[0] and s2[1], s1 = "yx", s2 = "yx".
// Example 2: 

// Input: s1 = "xy", s2 = "yx"
// Output: 2
// Explanation: 
// Swap s1[0] and s2[0], s1 = "yy", s2 = "xx".
// Swap s1[0] and s2[1], s1 = "xy", s2 = "xy".
// Note that you can't swap s1[0] and s1[1] to make s1 equal to "yx", cause we can only swap chars in different strings.
// Example 3:

// Input: s1 = "xx", s2 = "xy"
// Output: -1
// Example 4:

// Input: s1 = "xxyyxyxyxx", s2 = "xyyxyxxxyx"
// Output: 4
 

// Constraints:

// 1 <= s1.length, s2.length <= 1000
// s1, s2 only contain 'x' or 'y'.

// Thoughts:

// There are somethings we can find out easily for string s1 and s2:

// If the character is same for the same index in both string, we don't need to swap
// If we can find 2 unmatched x in s1 then we just need 1 step swap to make them match. Same as y.
// xx and yy => xy and xy
// yy and xx => xy and xy
// If the unmatched character is odd then we need a 2 step swap to make it match.
// xy and yx => xy and xy
// OK. Then we just need to write down the code according to what we've found.

const minimumSwap = (s1, s2) => {
    let steps = 0;
    let flag1 = 0;
    let flag2 = 0;
    for (let i = 0; i < s1.length; ++i) {
        if (s1[i] === s2[i]) continue;
        s1[i] === "x"
        ? ++flag1 === 2 && (++steps, flag1 = 0)
        : ++flag2 === 2 && (++steps, flag2 = 0);
    }
    return flag1 === flag2 ? steps + flag1 * 2 : -1;
};