// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

 


// Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

 


// The largest rectangle is shown in the shaded area, which has area = 10 unit.

 

// Example:

// Input: [2,1,5,6,2,3]
// Output: 10

var largestRectangleArea = function(heights) {
    // to deal with last element without going out of bound
    heights.push(0)
    const stack = [];
    let maxArea = 0, curr, currH, top, topH, area;
    
    for(let i = 0; i < heights.length; i++) {
        top = stack[stack.length-1];
        topH = heights[top];
        // pop from stack as long as the top of the stack
        // is greater than the current height and
        // the stack has at least 2 items
        while(stack.length > 1 && topH > heights[i]) {
            curr = stack.pop();
            currH = heights[curr];
            top = stack[stack.length-1];
            topH = heights[top];
            area = currH * (i - 1 - top);
            maxArea = Math.max(area, maxArea);
        }
        
        // when only 1 item left in the stack
        if(stack.length && topH > heights[i]) {
            curr = stack.pop();
            currH = heights[curr];
            area = currH * i;
            maxArea = Math.max(area, maxArea);
        }
        stack.push(i);
    }
    return maxArea;
};