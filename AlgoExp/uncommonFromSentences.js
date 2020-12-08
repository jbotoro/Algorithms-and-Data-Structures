// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words. 

// You may return the list in any order.

 

// Example 1:

// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:

// Input: A = "apple apple", B = "banana"
// Output: ["banana"]
 

// Note:

// 0 <= A.length <= 200
// 0 <= B.length <= 200
// A and B both contain only spaces and lowercase letters.

var uncommonFromSentences = function(A, B) {
    const arrA = A.split(' ');
    const arrB = B.split(' ');
    const len = A.length > B.length ? A.length : B.length;
    const map = {};
    const output = [];
    for (let i = 0; i < len; i ++){
        if (arrA[i]) {
            map[arrA[i]] = map[arrA[i]] + 1 || 1;
        }
        if (arrB[i]) {
            map[arrB[i]] = map[arrB[i]] + 1 || 1;
        }
    }
    for (let key in map) {
        if (map[key] === 1) {
            output.push(key);
        }
    }
    return output;
};