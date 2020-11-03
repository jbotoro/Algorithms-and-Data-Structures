// There are N children standing in a line. Each child is assigned a rating value.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

// Example 1:

// Input: [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
// Example 2:

// Input: [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
//              The third child gets 1 candy because it satisfies the above two conditions.

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    
    const candies = [];
    const lastIndex = ratings.length - 1;

    var dfs = (currInd) => {
        const currVal = ratings[currInd];
        
        // If we're not dealing with the first element of the array
        if(currInd > 0) {
            // if current is greater than previous
            if(currVal > ratings[currInd - 1]) {
                // set the candy count 1 above the previous child
                candies[currInd] = candies[currInd - 1] + 1;
            } else {
                // increment by 1
                candies[currInd] = (candies[currInd] || 0) + 1;
            }
        } else {
            // if first element; special case
            // compare the first element to the 2nd. This will help us seed the candy counting array
            if (currVal > ratings[currInd + 1]) {
                candies[currInd] = 2;
            } else candies[currInd] = 1;
        }

    
        if(currInd < lastIndex) {
            
            // search forward
            dfs(currInd + 1);
            // ... then back track and recalculate
            
            // If the current child is greater than the next child, make sure we have more candy
            if(currVal > ratings[currInd + 1] && candies[currInd] <= candies[currInd + 1]) {
                candies[currInd] = candies[currInd + 1] + 1;
            }
        }
        
        
    }
    
    dfs(0);
    
    
    return candies.reduce((acc, curr) => acc + curr, 0);
};

//  1: compare the current child rating with the child before it

// 2: The very first element is a special case. we need to check it against the child it its right to get the process started
// 3: if the current child is greater than child before it, then set candy to (precious child count + 1)

// 4: else, just increment by 1
// 5: We do a recursive call to calculate counts for the next child. This will allow us to adjust the candy counts for the current child based on those calculations

// 6: after recursive call returns, check the current value against its neighbor to the right to make sure that the counts are correct.

// 7: if they're not, then set the candy count of the current child to: ( next child candy count + 1);