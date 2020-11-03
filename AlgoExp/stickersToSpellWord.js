// We are given N different types of stickers. Each sticker has a lowercase English word on it.

// You would like to spell out the given target string by cutting individual letters from your collection of stickers and rearranging them.

// You can use each sticker more than once if you want, and you have infinite quantities of each sticker.

// What is the minimum number of stickers that you need to spell out the target? If the task is impossible, return -1.

// Example 1:

// Input:

// ["with", "example", "science"], "thehat"
// Output:

// 3
// Explanation:

// We can use 2 "with" stickers, and 1 "example" sticker.
// After cutting and rearrange the letters of those stickers, we can form the target "thehat".
// Also, this is the minimum number of stickers necessary to form the target string.
// Example 2:

// Input:

// ["notice", "possible"], "basicbasic"
// Output:

// -1
// Explanation:

// We can't form the target "basicbasic" from cutting letters from the given stickers.
// Note:

// stickers has length in the range [1, 50].
// stickers consists of lowercase English words (without apostrophes).
// target has length in the range [1, 15], and consists of lowercase English letters.
// In all test cases, all words were chosen randomly from the 1000 most common US English words, and the target was chosen as a concatenation of two random words.
// The time limit may be more challenging than usual. It is expected that a 50 sticker test case can be solved within 35ms on average.


/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function (stickers, target) {
    let sDics = stickers.map(x => getDic(x)), tDic = getDic(target)

    // check can make
    let sKeys = sDics.reduce((a, b) => Object.assign({}, a, b))
    for (let k in tDic) {
        if (!sKeys[k]) return -1
    }

    // remove uselsess
    sDics = sDics.map(x => {
        for (let k in x) {
        if (!tDic[k]) delete x[k]
        }
        return x
    })

    // recursion with memorize
    let keys = Object.keys(tDic), caches = {}
    let rtn = r()
    return rtn

    function r(left = keys.map(x => tDic[x])) {
        let k = left.join('')
        if (caches[k] !== undefined) return caches[k]
        if (left.every(x => !x)) return 0
        let min = Number.MAX_SAFE_INTEGER
        for (let sd of sDics) {
        let [tuseful, tleft] = calcLeft(left, sd)
        if (!tuseful) continue
        min = Math.min(min, r(tleft))
        }
        caches[k] = min + 1
        return caches[k]
    }

    function calcLeft(left = [], dics = {}) {
        let rtn = left.concat([]), useful = false
        for (let i = 0; i < left.length; i++) {
        let k = keys[i]
        if (!dics[k] || !rtn[i]) continue
        rtn[i] = Math.max(0, rtn[i] - dics[keys[i]])
        useful = true
        }
        return [useful, rtn]
    }

    function getDic(str) {
        let dic = {}
        for (let char of str) {
        dic[char] = (dic[char] || 0) + 1
        }
        return dic
    }
};
