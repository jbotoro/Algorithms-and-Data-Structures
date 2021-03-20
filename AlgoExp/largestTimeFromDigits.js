// Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

// Return the latest 24-hour time in "HH:MM" format.  If no valid time can be made, return an empty string.

 

// Example 1:

// Input: A = [1,2,3,4]
// Output: "23:41"
// Explanation: The valid 24-hour times are "12:34", "12:43", "13:24", "13:42", "14:23", "14:32", "21:34", "21:43", "23:14", and "23:41". Of these times, "23:41" is the latest.
// Example 2:

// Input: A = [5,5,5,5]
// Output: ""
// Explanation: There are no valid 24-hour times as "55:55" is not valid.
// Example 3:

// Input: A = [0,0,0,0]
// Output: "00:00"
// Example 4:

// Input: A = [0,0,1,0]
// Output: "10:00"
 

// Constraints:

// arr.length == 4
// 0 <= arr[i] <= 9

/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    const times = permutation(A)
        .filter(a => ((a[0] === 2 && a[1] < 4) || a[0] < 2) && a[2] < 6) // only keep valid times
        .map(a => 60 * (a[0] * 10 + a[1]) + a[2] * 10 + a[3]); // convert to minutes
    return times.length ? convert(Math.max(...times)) : '';
};

// convert minutes back to time
const convert = time => {
    const m = time % 60;
    const m2 = m % 10;
    const m1 = (m - m2) / 10;
    const h = (time - m) / 60;
    const h2 = h % 10;
    const h1 = (h - h2) / 10;
    return `${h1}${h2}:${m1}${m2}`;
};

// Heap's algorithm to generate permutations
const permutation = arr => {
    const generate = (arr, n) => {
        if (n == 1) {
        result.push(arr.slice());
        return;
        }
        for (var i = 0; i < n; i++) {
        generate(arr, n - 1);
        if (n % 2 === 0) {
            [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
        } else {
            [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
        }
        }
    };
    const result = [];
    generate(arr, arr.length);
    return result;
};