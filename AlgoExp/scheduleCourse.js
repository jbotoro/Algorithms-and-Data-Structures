// There are n different online courses numbered from 1 to n. Each course has some duration(course length) t and closed on dth day. A course should be taken continuously for t days and must be finished before or on the dth day. You will start at the 1st day.

// Given n online courses represented by pairs (t,d), your task is to find the maximal number of courses that can be taken.

// Example:

// Input: [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]
// Output: 3
// Explanation: 
// There're totally 4 courses, but you can take 3 courses at most:
// First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
// Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day. 
// Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day. 
// The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.
 

// Note:

// The integer 1 <= d, t, n <= 10,000.
// You can't take two courses simultaneously.


/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
    if (!courses.length) return 0
    // think it backwards, course with the last end date shall be taken last
    // so we sort with bigger d first
    courses.sort(([t1, d1], [t2, d2]) => d2 - d1)
    // keep note of date and course count, index=count,value = empty before day
    let arr = new Array(courses.length + 1).fill(-1)
    arr[0] = Number.MAX_SAFE_INTEGER, maxCount = 0
    // loop course
    for (let [t, d] of courses) {
        // we update from [maxCount+1] first based on maxCount, then smaller counts
        for (let i = maxCount + 1; i > 0; i--) {
        // if smaller count has enough left days for this course, then arrange it
        arr[i] = Math.max(arr[i], Math.min(arr[i - 1], d) - t)      
        // if we can arrange this course, then we got a new max count
        if (arr[i] > -1 && i > maxCount) maxCount = i
        }
    }
    return maxCount
};