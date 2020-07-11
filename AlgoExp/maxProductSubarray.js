//Given an integer array nums, find the contiguous subarray within an array 
//(containing at least one number) which has the largest product.

//Example 1:

//Input: [2,3,-2,4]
//Output: 6
//Explanation: [2,3] has the largest product 6.
//Example 2:

//Input: [-2,0,-1]
//Output: 0
//Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	if(!nums.length) return 0
	
	let max = nums[0]
	let currentMax = nums[0]
	let currentMin = nums[0]
	
	for(let i=1;i<nums.length;i++){
		if(nums[i]<0){
			let temp = currentMax
			currentMax = currentMin
			currentMin = temp
		}
		currentMax = Math.max(currentMax*nums[i], nums[i])
		currentMin = Math.min(currentMin*nums[i], nums[i])

		max = Math.max(currentMax, max)
	}
	return max;
};