// Shuffle an Array

//Shuffle a set of numbers without duplicates.

//Example:

// Init an array with set 1, 2, and 3.
//int[] nums = {1,2,3};
//Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
//solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
//solution.reset();

// Returns the random shuffling of array [1,2,3].
//solution.shuffle();

class Solution {
    constructor(nums){
        this.nums =  nums;
    }

    reset(){
        return this.nums;
    }

    shuffle() {
        const res = [...this.nums];
        const len = this.nums.length;
        for (let i = 0; i < len; i++){
            const targetIdx = Math.floor(len * Math.random());
            const temp = res[i];
            res[i] = res[targetIdx];
            res[targetIdx] = tmp;
        }

        return res;
    }
}

