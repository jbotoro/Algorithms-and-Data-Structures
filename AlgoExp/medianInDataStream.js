//Median is the middle value in an ordered integer list. If the size of the 
//list is even, there is no middle value. So the median is the mean of the 
//two middle value.

//For example,
//[2,3,4], the median is 3

//[2,3], the median is (2 + 3) / 2 = 2.5

//Design a data structure that supports the following two operations:

//void addNum(int num) - Add a integer number from the data stream to the data 
//structure.
//double findMedian() - Return the median of all elements so far.


//Example:

//addNum(1)
//addNum(2)
//findMedian() -> 1.5
//addNum(3) 
//findMedian() -> 2


//Follow up:

//If all integer numbers from the stream are between 0 and 100, how would you 
//optimize it?
//If 99% of all integer numbers from the stream are between 0 and 100, 
//how would you optimize it?

class MedianFinder {
    constructor() {
        // set up array
        this.arr = [];
    }
	
    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // check if array is size 0, just push
        if (this.arr.length === 0) {
            this.arr.push(num);
            return;
        }
		
        // left and right pointers for binary search
        let l = 0;
        let r = this.arr.length;
		
        // keep going until pointers meet
        while (l < r) {
            // get mid point
            const mid = Math.floor((l + r) / 2);
            // check if we can insert at mid
            if (num > this.arr[mid]) {
                // search right half of array
                l = mid + 1;
            } else {
                // search left half of array
                r = mid;
            }
        }
		
        // we can insert at left pointer
        this.arr.splice(l, 0, num);
    }
	
    /**
     * @return {number}
     */
    findMedian() {
        // if odd, return middle, if even, return avg of two middle
        const mid = Math.floor(this.arr.length / 2);
        return (this.arr.length & 1) === 1
            ? this.arr[mid]
            : (this.arr[mid] + this.arr[mid - 1]) / 2;
    }
}