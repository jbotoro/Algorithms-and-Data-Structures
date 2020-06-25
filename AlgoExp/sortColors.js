//Given an array with n objects colored red, white or blue, sort them in-place 
//so that objects of the same color are adjacent, with the colors in the order 
//red, white and blue.

//Here, we will use the integers 0, 1, and 2 to represent the color red, white, 
//and blue respectively.

//Note: You are not suppose to use the library's sort function for this problem.

//Example:

//Input: [2,0,2,1,1,0]
//Output: [0,0,1,1,2,2]

var sortColors = function(nums) {
    let left = 0;
    let curr = 0;
    let right = nums.length-1;
    while (curr<=right) 
        if (nums[curr] == 0) 
            [nums[curr++], nums[left++]] = [nums[left], nums[curr]]; //swap values, you are always putting the 0 to the left edge, can increment new current since we have already looked at it before (curr>=left so we have already evaluated it)
        else if (nums[curr] == 2) 
            [nums[curr], nums[right--]] = [nums[right], nums[curr]]; //swap, so right side always has 2's, do not increment current yet because don't know what value it was.
        else
            curr++; // current was a 1, so you don't move it to either side, go next
};