// Run-length encoding is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "aabccc" we replace "aa" by "a2" and replace "ccc" by "c3". Thus the compressed string becomes "a2bc3".

// Notice that in this problem, we are not adding '1' after single characters.

// Given a string s and an integer k. You need to delete at most k characters from s such that the run-length encoded version of s has minimum length.

// Find the minimum length of the run-length encoded version of s after deleting at most k characters.

 

// Example 1:

// Input: s = "aaabcccd", k = 2
// Output: 4
// Explanation: Compressing s without deleting anything will give us "a3bc3d" of length 6. Deleting any of the characters 'a' or 'c' would at most decrease the length of the compressed string to 5, for instance delete 2 'a' then we will have s = "abcccd" which compressed is abc3d. Therefore, the optimal way is to delete 'b' and 'd', then the compressed version of s will be "a3c3" of length 4.
// Example 2:

// Input: s = "aabbaa", k = 2
// Output: 2
// Explanation: If we delete both 'b' characters, the resulting compressed string would be "a4" of length 2.
// Example 3:

// Input: s = "aaaaaaaaaaa", k = 0
// Output: 3
// Explanation: Since k is zero, we cannot delete anything. The compressed string is "a11" of length 3.
 

// Constraints:

// 1 <= s.length <= 100
// 0 <= k <= s.length
// s contains only lowercase English letters.

var getLengthOfOptimalCompression = function(s, k) {
    const n = s.length;
    let dp = {};
    function dfs(i, j) {
        if (i === n) return 0;
        const ik = [i, j] + '';
        if (ik in dp) return dp[ik];
        let r = -1;
        if (j) r = dfs(i + 1, j - 1);
        let ii = i + 1;
        let c = 1;
        while (ii <= n) {
        let t = dfs(ii, j) + 1;
        if (c >= 100) t += 3;
        else if (c >= 10) t += 2;
        else if (c > 1) t += 1;
        if (r < 0 || r > t) r = t;
        if (ii == n) break;
        if (s[ii] == s[i]) c += 1;
        else {
            if (j == 0) break;
            j -= 1;
        }
        ii += 1;
        }
        dp[ik] = r;
        return r;
    }
    return dfs(0, k);
};