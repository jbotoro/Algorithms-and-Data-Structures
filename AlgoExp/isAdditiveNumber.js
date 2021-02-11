// Additive number is a string whose digits can form additive sequence.

// A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

// Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

// Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

 

// Example 1:

// Input: "112358"
// Output: true
// Explanation: The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
//              1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
// Example 2:

// Input: "199100199"
// Output: true
// Explanation: The additive sequence is: 1, 99, 100, 199. 
//              1 + 99 = 100, 99 + 100 = 199
 

// Constraints:

// num consists only of digits '0'-'9'.
// 1 <= num.length <= 35

var isAdditiveNumber = function(num) {
    if(num.length < 3) return false
    const isValid = (s1, s2, num) => {
        if (!num) return true
        let sub1 = s2
        let sub2 = (s1-0)+(s2-0)+''
        let newNum = num.slice(sub2.length)
        return num.startsWith(sub2) && isValid(sub1,sub2,newNum)
    }
    let n = num.length
    let sub1, sub2
    for (let i=0;i<n/2;i++) {
        if (num[0] == "0" && i > 1) return false
        sub1 = num.slice(0,i)
        for (let j=0;j<n;j++) {
        if (Math.max(i, j) > n - i - j) break
        if (num[i] == "0" && j > 1) break
        sub2 = num.slice(i, i + j)
        if (isValid(sub1, sub2, num.slice(i + j,)) && sub1 && sub2) {
            return true
        }
        }
    }
    return false
};