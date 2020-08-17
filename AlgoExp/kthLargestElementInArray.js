// Find the kth largest element in an unsorted array. Note that it is the kth 
//largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.

var findKthLargest = function(nums, k) {
    // the final position of the kth largest number in a sorted array
    const finalIdx = nums.length - k;
    let left = 0;
    let right = nums.length-1;
    
    while(left <= right) {
        // random num between left and right
        const pivot = Math.floor(Math.random() * (right - left + 1)) + left;
        // the final position of the pivot in a sorted array        
        const pivotIdx = pivotHelper(pivot, left, right);
        // the target number is in its correct postion, thus return
        if(pivotIdx === finalIdx) return nums[finalIdx];
        
        // if pivotIdx is smaller we undershot, so look only on the right half
        if(pivotIdx < finalIdx) left = pivotIdx + 1;
        // else we overshot, so look only on the left half
        else right = pivotIdx - 1;
    }
    
    function pivotHelper(pivot, start, end) {
        // move the pivot to the end (get it out of the way)
        swap(pivot, end);
        
        let i = start;
        let j = start;
        
        // move smaller nums to the begining of the array
        while(j < end) {
            if(nums[j] <= nums[end]) {
                swap(i, j);
                i++;
            } 
            j++;
        }
        // swap pivot to its final position
        swap(i, end);
        return i;
    }
    
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
};