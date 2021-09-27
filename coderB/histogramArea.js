// Histogram Area

// Have the function HistogramArea(arr) read the array of non-negative integers 
// stored in arr which will represent the heights of bars on a graph (where each 
//     bar width is 1), and determine the largest area underneath the entire bar 
//     graph. For example: if arr is [2, 1, 3, 4, 1] then this looks like the 
//     following bar graph:



// You can see in the above bar graph that the largest area underneath the graph 
// is covered by the x's. The area of that space is equal to 6 because the entire 
// width is 2 and the maximum height is 3, therefore 2 * 3 = 6. Your program 
// should return 6. The array will always contain at least 1 element.

// Examples
// Input: [6, 3, 1, 4, 12, 4]
// Output: 12
// Input: [5, 6, 7, 4, 1]
// Output: 16

function HistogramArea(arr) {
    
    let s = []; // our stack
    let maxArea = 0;
    let tp; // top of the stack position
    let areaWithTop; // area with top bar as the smallest bar
    
    let i = 0;
    while (i < arr.length) { 
        // If this bar is higher than the bar on top stack, push it to stack 
        if (s.length === 0 || arr[s[s.length-1]] <= arr[i]) {
            s.push(i++);
        }
        // If this bar is lower than top of stack, then calculate area of rectangle  
        // with stack top as the smallest (or minimum height) bar where "i" is right index
        // for the top and element before top in stack is the left index
        else {
            tp = s[s.length-1];
            s.pop();
            // Calculate the area with arr[tp] stack as smallest bar 
            areaWithTop = arr[tp] * (s.length === 0 ? i : i - s[s.length-1] - 1);
            // update max area, if needed
            if (maxArea < areaWithTop) maxArea = areaWithTop;
        }
    }
    // Now we pop the remaining bars from stack and calculate area with every popped bar as the smallest bar
    while (s.length > 0) {
        tp = s[s.length-1];
        s.pop();
        areaWithTop = arr[tp] * (s.length === 0 ? i : i - s[s.length-1] - 1); 
        if (maxArea < areaWithTop) maxArea = areaWithTop;
    }
    return maxArea;
}