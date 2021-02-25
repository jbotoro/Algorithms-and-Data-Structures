// You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

// What is the maximum number of envelopes can you Russian doll? (put one inside other)

// Note:
// Rotation is not allowed.

// Example:

// Input: [[5,4],[6,4],[6,7],[2,3]]
// Output: 3 
// Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {

    if(envelopes.length < 2) return envelopes.length;
        
    envelopes.sort((a,b)=>a[0]===b[0] ? b[1]-a[1] : a[0]-b[0]);
    let dp = new Array(envelopes.length);
    let size = 0;
    
    for(let envelope of envelopes) {
        // binary search
        let lo = 0, hi = size;     // right = size
        while(lo < hi) {
            let mid = Math.floor((lo+hi)/2);
            if(dp[mid] < envelope[1]) lo = mid + 1;
            else hi = mid;
        }
        
        // left is the right position to 'replace' in dp array
        dp[lo] = envelope[1];
        if(lo == size) size++;
    }
    return size;
};