//# 1 Longest Substring without Repeating Characters

//Given a string, find the length of the longest substring without repeating characters.

//Example 1:

//Input: "abcabcbb"
//Output: 3 
//Explanation: The answer is "abc", with the length of 3. 

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    const map = {};
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}

