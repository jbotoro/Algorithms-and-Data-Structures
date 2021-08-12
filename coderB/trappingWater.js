// Trapping Water

// Have the function TrappingWater(arr) take the array of non-negative integers 
// stored in arr, and determine the largest amount of water that can be trapped. 
// The numbers in the array represent the height of a building (where the width of 
//     each building is 1) and if you imagine it raining, water will be trapped
//      between the two tallest buildings. For example: if arr is 
//      [3, 0, 0, 2, 0, 4] then this array of building heights looks like the 
//      following picture if we draw it out:



// Now if you imagine it rains and water gets trapped in this picture, then 
// it'll look like the following (the x's represent water):



// This is the most water that can be trapped in this picture, and if you 
// calculate the area you get 10, so your program should return 10.

// Examples
// Input: [1, 2, 1, 2]
// Output: 1
// Input: [0, 2, 4, 0, 2, 1, 2, 6]
// Output: 11

function TrappingWater(arr) {
  let area = 0;
  for (let i = 1, m = Math.max(...arr); i < m + 1; i ++) {
    for (let i2 = 0, gate = false; i2 < arr.length; i2 ++) {
      let freeSpace = arr[i2] < i;
      
      if (!freeSpace)
        gate = true;
      else if (gate)
        area ++;
    }
  }
  return area;
}