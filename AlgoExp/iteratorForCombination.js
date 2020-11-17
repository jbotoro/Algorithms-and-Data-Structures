// Design an Iterator class, which has:

// A constructor that takes a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
// A function next() that returns the next combination of length combinationLength in lexicographical order.
// A function hasNext() that returns True if and only if there exists a next combination.
 

// Example:

// CombinationIterator iterator = new CombinationIterator("abc", 2); // creates the iterator.

// iterator.next(); // returns "ab"
// iterator.hasNext(); // returns true
// iterator.next(); // returns "ac"
// iterator.hasNext(); // returns true
// iterator.next(); // returns "bc"
// iterator.hasNext(); // returns false
 

// Constraints:

// 1 <= combinationLength <= characters.length <= 15
// There will be at most 10^4 function calls per test.
// It's guaranteed that all calls of the function next are valid.

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    const res = [];
    const traverse = (str, index) => {
        if (str.length === combinationLength) {
            res.push(str);
            return;
        }
        for (let i = index; i < characters.length; i++) {
            traverse(str+characters[i], i+1);
        }
    }
    traverse('', 0)
    this.combinations = res;
    this.currIndex = 0;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    this.currIndex++ 
    return this.combinations[this.currIndex - 1];
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    if (this.currIndex >= this.combinations.length) {
        return false
    };
    return true;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */