//You are given coins of different denominations and a total amount of money 
//amount. Write a function to compute the fewest number of coins that you need 
//to make up that amount. If that amount of money cannot be made up by any 
//combination of the coins, return -1.

//Example 1:

//Input: coins = [1, 2, 5], amount = 11
//Output: 3 
//Explanation: 11 = 5 + 5 + 1
//Example 2:

//Input: coins = [2], amount = 3
//Output: -1

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(!amount) return 0
    coins.sort((a, b) => b - a);
    let res = amount + 1;
    const dfs = (rest, num, coinIndex) => {
        if(rest === 0) return res = Math.min(res, num);
        if(coins.length === coinIndex) return;
        // count means how many coins at that value should be used
        let count = Math.floor(rest / coins[coinIndex]);
        while(count >= 0 && num + count < res) {
            dfs(rest - count * coins[coinIndex], num + count, coinIndex + 1)
            count--;
        }
    }
    dfs(amount, 0, 0);
    return res > amount ? -1 : res;
};