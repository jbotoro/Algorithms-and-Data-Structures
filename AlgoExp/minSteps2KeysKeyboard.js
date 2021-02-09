// Initially on a notepad only one character 'A' is present. You can perform two operations on this notepad for each step:

// Copy All: You can copy all the characters present on the notepad (partial copy is not allowed).
// Paste: You can paste the characters which are copied last time.
 

// Given a number n. You have to get exactly n 'A' on the notepad by performing the minimum number of steps permitted. Output the minimum number of steps to get n 'A'.

// Example 1:

// Input: 3
// Output: 3
// Explanation:
// Intitally, we have one character 'A'.
// In step 1, we use Copy All operation.
// In step 2, we use Paste operation to get 'AA'.
// In step 3, we use Paste operation to get 'AAA'.
 

// Note:

// The n will be in the range [1, 1000].

// The idea is: on each recursive step we have to deside what to do (copyAll or Paste from cache).
// If do copyAll => cache becomes equal quantity
// If do Paste => sum up quantity and cache
// quantity is number of 'A's
// cache is number of 'A's to paste.
// for DFS:
// choosing children:
// We can not do copyAll on every step as it doesn't make any sence to copy same value each time.
// Exit from recursion:
// - numbers of 'A's (or depth) more than n;
// - we reached right quantity
// Result = minimum depth of recursion tree.
// For BFS:
// same idea as DFS
// add prunning: if quantity + cache > n => no need to go futher

// DFS
var minSteps = function(n) {
    
    let memo = new Map();
    let result = dfs(1,0,0, false);
    return result;

    function dfs(quantity, cache, depth, copiedLast){
        if (quantity > n){     
        return Number.MAX_SAFE_INTEGER;
        }
        if (depth > n){     
        return Number.MAX_SAFE_INTEGER;
        }
        if (quantity === n){     
        return depth;
        }

        let key = `${quantity}-${cache}`;
        if (memo.has(key)){
        return memo.get(key);
        }
        let copyRez = Number.MAX_SAFE_INTEGER;
        if (!copiedLast){
        copyRez = dfs(quantity, quantity, depth + 1, true);
        }    
        let pasteRez = dfs(quantity + cache, cache, depth + 1, false);
        let currentRez = Math.min(copyRez, pasteRez);
        memo.set(key, currentRez);
        return currentRez;
    }
};
// BFS

var minSteps = function(n) {
    let q = [[1, 0], null];
    let depth = 0;  
    let visited = new Map();
    
    while (q.length){
        let node = q.shift();
        if (node === null){
        if (q.length){
            depth++;
            q.push(null);
        }
        }else{
        let quantity = node[0];
        let cache = node[1];
        let key = `${quantity}-${cache}`;
        if (visited.has(key)){
            continue;
        }      
        if (quantity === n){
            return depth;
        }         
        if (quantity + cache <= n){
            q.push([quantity, quantity]); // copyAll   
            q.push([quantity  + cache, cache]); // paste          
        }
        visited.set(key, true) ;
        }
    }
}