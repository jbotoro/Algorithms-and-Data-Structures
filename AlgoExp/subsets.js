// Given a set of distinct integers, nums, return all possible subsets 
//(the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

var subsets = function(nums) {
    const result = [];
    
    function permute(arr, index) {
        result.push(arr);
        
        for(let i = index; i < nums.length; i++) {
            permute([...arr, nums[i]], i + 1);
        }
    }
    permute([], 0);
    return result;
};