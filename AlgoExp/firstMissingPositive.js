//iven an unsorted integer array, find the smallest missing positive integer.

//Example 1:

//Input: [1,2,0]
//Output: 3
//Example 2:

//Input: [3,4,-1,1]
//Output: 2
//Example 3:

//Input: [7,8,9,11,12]
//Output: 1

var firstMissingPositive = function(nums) {
    let i = 0;
    while(i < nums.length){
        //calculating the actualPosition where the element should be
        let actualPosition = nums[i]-1;
        
        if(nums[i] != i+1 && 
           
           // don't swap if actualPosition is out of array
           !isNaN(nums[actualPosition]) && 
           
           //case for duplicate element at swapping position [1,1]
           nums[i]!=nums[actualPosition]) 
            
            //swap and move the number to actual position
            [nums[i], nums[actualPosition]] = [nums[actualPosition], nums[i]];
        
        else i++;
    }
    i=0;
    //find the missing one ;D
    while(nums[i]==i+1) i++;
    return i+1;
};
