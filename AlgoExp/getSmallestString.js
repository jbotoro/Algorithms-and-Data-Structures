// The numeric value of a lowercase character is defined as its position (1-indexed) in the alphabet, so the numeric value of a is 1, the numeric value of b is 2, the numeric value of c is 3, and so on.

// The numeric value of a string consisting of lowercase characters is defined as the sum of its characters' numeric values. For example, the numeric value of the string "abe" is equal to 1 + 2 + 5 = 8.

// You are given two integers n and k. Return the lexicographically smallest string with length equal to n and numeric value equal to k.

// Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.

 

// Example 1:

// Input: n = 3, k = 27
// Output: "aay"
// Explanation: The numeric value of the string is 1 + 1 + 25 = 27, and it is the smallest string with such a value and length equal to 3.
// Example 2:

// Input: n = 5, k = 73
// Output: "aaszz"
 

// Constraints:

// 1 <= n <= 105
// n <= k <= 26 * n
// Approach:
// 1. Set default array to be a for length of n with a.
// 2. From the last index, find what is the maximum index it can be (which is 26) - z
// 3. Repeat until k reaches 0;
// 4. Join final array to get correct string.

var getSmallestString = function(n, k) {
    let results = [], max = 25, lastIndex = n - 1;
    for (let i = 0; i < n; i++) {
        results[i] = 1;
    }
    k -= n;
    while (k > 0) {
        if (k <= max) {
            max = k;
        }
        results[lastIndex] = results[lastIndex] + max;
        lastIndex--;
        k -= max;
    }
    const startingPoint = "a".charCodeAt(0) - 1;
    return results.map((item) => String.fromCharCode(startingPoint + item)).join("");
};
