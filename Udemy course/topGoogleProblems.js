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

//#2 Word Break

//Given a non-empty string s and a dictionary wordDict containing a list of 
//non-empty words, determine if s can be segmented into a space-separated 
//sequence of one or more dictionary words.

//Note:

//The same word in the dictionary may be reused multiple times in the segmentation.
//You may assume the dictionary does not contain duplicate words.
//Example 1:

//Input: s = "leetcode", wordDict = ["leet", "code"]
//Output: true
//Explanation: Return true because "leetcode" can be segmented as "leet code".

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (!s && !wordDict.length) {
        return true;
    } else if (!s || !wordDict.length ) {
        return false;
    }    
    let dp = new Array(s.length+1).fill(false);
    dp[0] = true;
    // dp[i] 代表 0-i是breakable的
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    } 
    return dp[s.length]
};