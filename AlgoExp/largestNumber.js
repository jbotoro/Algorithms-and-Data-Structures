//Given a list of non negative integers, arrange them such that they form the 
//largest number.

//Example 1:

//Input: [10,2]
//Output: "210"
//Example 2:

//Input: [3,30,34,5,9]
//Output: "9534330"
//Note: The result may be very large, so you need to return a string instead 
//of an integer.

var largestNumber = function(nums) {
    const res = nums
        .map(n => n.toString())
        .sort((a,b) => {
        for (let k = 0; k < a.length + b.length; k++) {
            let i = k % a.length;
            let j = k % b.length;
            if (a[i] > b[j]) return -1; // a comes first
            if (a[i] < b[j]) return 1;  // b comes first
        }

        return 0;
        }).join('');
    
    return res[0] === '0' ? '0' : res;
};