//Given an array nums, there is a sliding window of size k which is moving from 
//the very left of the array to the very right. You can only see the k numbers 
//in the window. Each time the sliding window moves right by one position. 
//Return the max sliding window.

//Follow up:
//Could you solve it in linear time?

//Example:

//Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
//Output: [3,3,5,5,6,7] 
//Explanation: 

//Window position                Max
//---------------               -----
//[1  3  -1] -3  5  3  6  7       3
// 1 [3  -1  -3] 5  3  6  7       3
// 1  3 [-1  -3  5] 3  6  7       5
// 1  3  -1 [-3  5  3] 6  7       5
// 1  3  -1  -3 [5  3  6] 7       6
// 1  3  -1  -3  5 [3  6  7]      7


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const maxQueue = new MaxQueue();
    
    for(let i=0; i<k; i++) {
        maxQueue.enqueue(nums[i]);
    }
    const ret = [];
    ret.push(maxQueue.getMax());
    
    while(k<nums.length) {
        maxQueue.dequeue();
        maxQueue.enqueue(nums[k]);
        ret.push(maxQueue.getMax());
        k++;
    }
    
    return ret;
};

class MaxQueue {
    constructor() {
        this.queue = [];
        this.max = [];
    }
    enqueue(num) {
        this.queue.push(num);
        while(this.max.length && this.max[this.max.length-1] < num) {
        this.max.pop(); // remove last element of the queue
        }
        this.max.push(num); // add current num
    }
    dequeue() {
        if(this.queue[0] === this.max[0]) {
        this.max.shift();
        }
        this.queue.shift();
    }
    getMax() {
        return this.max[0];
    }
}