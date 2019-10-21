// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function change(amount, coins, memo = {}) {
    if (amount === 0) return 1;
    if (coins.length === 0) return 0;

    let key = `${amount}-${coins.join(',')}`;
    if (key in memo) return memo[key];

    let coinVal = coins[coins.length - 1];

    let total = 0;
    for (let quanitity = 0; quanitity <= (amount / coinVal); quanitity++) {
        total += change(amount - (quanitity * coinVal), coins.slice(0, -1), memo);
    }

    memo[key] = total;
    return total;
}