// Convert a non-negative integer num to its English words representation.

 

// Example 1:

// Input: num = 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// Example 4:

// Input: num = 1234567891
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
 

// Constraints:

// 0 <= num <= 231 - 1

/**
 * @param {number} num
 * @return {string}
 */
const numberMap = new Map([
    ['1', 'One'],
    ['2', 'Two'],
    ['3', 'Three'],
    ['4', 'Four'],
    ['5', 'Five'],
    ['6', 'Six'],
    ['7', 'Seven'],
    ['8', 'Eight'],
    ['9', 'Nine'],
    ['10', 'Ten'],
    ['11', 'Eleven'],
    ['12', 'Twelve'],
    ['13', 'Thirteen'],
    ['14', 'Fourteen'],
    ['15', 'Fifteen'],
    ['16', 'Sixteen'],
    ['17', 'Seventeen'],
    ['18', 'Eighteen'],
    ['19', 'Nineteen'],
    ['20', 'Twenty'],
    ['30', 'Thirty'],
    ['40', 'Forty'],
    ['50', 'Fifty'],
    ['60', 'Sixty'],
    ['70', 'Seventy'],
    ['80', 'Eighty'],
    ['90', 'Ninety']
]);

const map = new Map([
    [1, 'Hundred'],
    [2, 'Thousand'],
    [3, 'Million'],
    [4, 'Billion']
])

var numberToWords = function (num) {
    if (num === 0) {
        return 'Zero';
    }
    if (num <= 20) {
        return numberMap.get('' + num);
    }
    let threeCount = 0;
    const str = new String(num)
    const arr = Array.from(str);
    let res = [];
    while (arr.length) {
        const N = arr.length - 3 >= 0 ? arr.length - 3 : 0;
        const three = arr.splice(N, 3);
        threeCount++;
        const threeStr = buildWords(three, threeCount)
        let level = threeCount > 1 ? map.get(threeCount) : ''
        // in case of 000, skip Thousand...
        if (threeStr.length) {
        threeStr.push(level)
        }
        res = threeStr.concat(res)
    }
    return res.join(' ').trim();
};

function buildWords(arr) {
    let str = []
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = ''
        const last = arr[i];
        const middle = arr[i - 1];
        const first = arr[i - 2]
        const hunAndOne = handleHundredAndOne(first, middle, last)
        if (hunAndOne.length){
            return hunAndOne
        }

    if (numberMap.has('' + middle + last)) {
        temp = numberMap.get('' + middle + last)
        str.unshift(temp)
        i--
    } else if (numberMap.has('' + middle + '0') && numberMap.has('' + last)) {
        temp += numberMap.get('' + middle + '0') + ' '
        temp += numberMap.get('' + last)
        str.unshift(temp)
        i--
    } else if (numberMap.has('' + last)) {
        temp += numberMap.get('' + last)
        const hundred = (arr.length == 3 && i == 0) ? map.get(1) : ''
        if (hundred) {
            str.unshift(hundred)
        }
        str.unshift(temp)
        }
    }
return str
}

// looking for hundreds 100, 200, 101, 206
function handleHundredAndOne(first, middle, last) {
    let str = [];
    if (last == 0 && middle == 0 && first > 0) {
        str = [numberMap.get(first), map.get(1)]
    } else if (last > 0 && middle == 0 && first > 0) {
        str = [numberMap.get(first), map.get(1), numberMap.get(last)]
    } else if (last == 0 && middle == 0 && first == 0) {
        str = [];
    }
    return str;
}