// You are given an integer array nums and you have to return a new counts 
//array. The counts array has the property where counts[i] is the number of 
//smaller elements to the right of nums[i].

 

// Example 1:

// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.
 

// Constraints:

// 0 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4

/**
 * @param {number[]} nums
 * @return {number[]}
 */
class BST{
    constructor(v, s = 0){
        this.value = v;
        this.left = this.right = null;
        this.size = s;
    }
    insert(v, s = 0){
        if(v > this.value){
            if(this.right){
                return this.right.insert(v, s + this.size + 1)
            }else{
                this.right = new BST(v)
                return this.size + s + 1
            }
        }else{
            this.size++;
            if(this.left){
                return this.left.insert(v,s);
            }else{
                this.left = new BST(v)
                return s
            }
        }
    
    }
}
function countSmaller(arr){
    
    const bst = new BST(arr[arr.length - 1]);
    
    const output = new Array(arr.length);
    
    output[output.length - 1] = 0;
    
    for(let i = arr.length - 2; i >= 0; i--){
        output[i] = bst.insert(arr[i])
    }
    
    return output
    
}