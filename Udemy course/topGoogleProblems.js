//#1 Trapping Rain Water

//Given n non-negative integers representing an elevation map where the width 
//of each bar is 1, compute how much water it is able to trap after raining.

//Example:

//Input: [0,1,0,2,1,0,1,3,2,1,2,1]
//Output: 6

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(array) {

    let leftArray = new Array(array.length).fill(0);
    let left =0;

    for(let i =0; i < array.length; i++){
    
    const height = array[i];
    leftArray[i] = left; 
    left = Math.max(left, height)
    }



    
    let right =0;
    for(let i =array.length -1;i >=0; i--){
        const height = array[i];
        const minHeight = Math.min(leftArray[i],right);
    
        if(height < minHeight){
            leftArray[i] = minHeight-height;
        }else{
            leftArray[i] =0;
        } 
        
        right = Math.max(right, height)
    }
    return leftArray.reduce((a,b)=> a +b,0)
};