// A string S of lowercase letters is given.  Then, we may make any number of moves.

// In each move, we choose one of the first K letters (starting from the left), remove it, and place it at the end of the string.

// Return the lexicographically smallest string we could have after any number of moves.

 

// Example 1:

// Input: S = "cba", K = 1
// Output: "acb"
// Explanation: 
// In the first move, we move the 1st character ("c") to the end, obtaining the string "bac".
// In the second move, we move the 1st character ("b") to the end, obtaining the final result "acb".
// Example 2:

// Input: S = "baaca", K = 3
// Output: "aaabc"
// Explanation: 
// In the first move, we move the 1st character ("b") to the end, obtaining the string "aacab".
// In the second move, we move the 3rd character ("c") to the end, obtaining the final result "aaabc".
 

// Note:

// 1 <= K <= S.length <= 1000
// S consists of lowercase letters only.

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var orderlyQueue = function(S, K) {
	if (K === 0) return S;
    else if (K > 1) return S.split('').sort().join('');

	let result = 0, L = S.length;

	for (let i = 1; i < L; i++) {
        for (let j = 0; j < L; j++) {
			let d = S.charCodeAt((result + j) % L) - S.charCodeAt((i + j) % L);
			if (d !== 0)  {
				if (d > 0) result = i;
				break;
			}
		}
	}

	return S.slice(result) + S.slice(0, result);

};