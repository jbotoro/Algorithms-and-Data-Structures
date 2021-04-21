// Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target.

// As the answer can be very large, return it modulo 109 + 7.

 

// Example 1:

// Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
// Output: 20
// Explanation: 
// Enumerating by the values (arr[i], arr[j], arr[k]):
// (1, 2, 5) occurs 8 times;
// (1, 3, 4) occurs 8 times;
// (2, 2, 4) occurs 2 times;
// (2, 3, 3) occurs 2 times.
// Example 2:

// Input: arr = [1,1,2,2,2,2], target = 5
// Output: 12
// Explanation: 
// arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
// We choose one 1 from [1,1] in 2 ways,
// and two 2s from [2,2,2,2] in 6 ways.
 

// Constraints:

// 3 <= arr.length <= 3000
// 0 <= arr[i] <= 100
// 0 <= target <= 300

var threeSumMulti = function(A, T) {
    let nmap = new Uint16Array(101), third = T / 3, ans = 0
    for (let i in A) nmap[A[i]]++
    for (let k = Math.min(T, 100); k >= third; k--) {
        let rem = T - k, half = rem / 2
        for (let j = Math.min(rem, k); j >= half; j--) {
            let i = rem - j, x = nmap[i], y = nmap[j], z = nmap[k], res
            if (i === k) res = x * (x-1) * (x-2) / 6
            else if (i === j) res = x * (x-1) / 2 * z
            else if (j === k) res = x * y * (y-1) / 2
            else res = x * y * z
            ans = (ans + res) % 1000000007
        }
    }
    return ans
};