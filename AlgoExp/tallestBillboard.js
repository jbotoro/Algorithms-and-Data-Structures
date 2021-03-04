// You are installing a billboard and want it to have the largest height. The billboard will have two steel supports, one on each side. Each steel support must be an equal height.

// You are given a collection of rods that can be welded together. For example, if you have rods of lengths 1, 2, and 3, you can weld them together to make a support of length 6.

// Return the largest possible height of your billboard installation. If you cannot support the billboard, return 0.

 

// Example 1:

// Input: rods = [1,2,3,6]
// Output: 6
// Explanation: We have two disjoint subsets {1,2,3} and {6}, which have the same sum = 6.
// Example 2:

// Input: rods = [1,2,3,4,5,6]
// Output: 10
// Explanation: We have two disjoint subsets {2,3,5} and {4,6}, which have the same sum = 10.
// Example 3:

// Input: rods = [1,2]
// Output: 0
// Explanation: The billboard cannot be supported, so we return 0.
 

// Constraints:

// 1 <= rods.length <= 20
// 1 <= rods[i] <= 1000
// sum(rods[i]) <= 5000

/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function(rods) {
    let len = rods.length;
    if (len <= 1) return 0;
    let dp = [];
    for (let i = 0; i < len + 5; i++) {
        dp[i] = [];
        for (let j = 0; j < 5005 * 2; j++) {
            dp[i][j] = -1
        }
    }
    return solve(0, 0, rods, dp);
}

var solve = function(i, sum, rods, dp) {
    if (i == rods.length) {
            if (sum == 0) {
                return 0
            }else{
                return -5000
            }
        }
        if (dp[i][sum + 5000] != -1) {
            return dp[i][sum + 5000];
        }
        let val = solve(i + 1, sum, rods, dp);
        val = Math.max(val, solve(i + 1, sum + rods[i], rods, dp) + rods[i]);
        val = Math.max(val, solve(i + 1, sum - rods[i], rods, dp));
        dp[i][sum + 5000] = val;
        return val;
}