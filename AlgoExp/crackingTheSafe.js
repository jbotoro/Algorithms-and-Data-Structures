// There is a box protected by a password. The password is a sequence of n digits 
//where each digit can be one of the first k digits 0, 1, ..., k-1.

// While entering a password, the last n digits entered will automatically be 
//matched against the correct password.

// For example, assuming the correct password is "345", if you type "012345", 
//the box will open because the correct password matches the suffix of the 
//entered password.

// Return any password of minimum length that is guaranteed to open the box at 
//some point of entering it.

 

// Example 1:

// Input: n = 1, k = 2
// Output: "01"
// Note: "10" will be accepted too.
// Example 2:

// Input: n = 2, k = 2
// Output: "00110"
// Note: "01100", "10011", "11001" will be accepted too.
 

// Note:

// n will be in the range [1, 4].
// k will be in the range [1, 10].
// k^n will be at most 4096.

const crackSafe = (n, k) => {
        // If k and n equal 1 the only combination possible is 0.
        if (n === 1 && k === 1) return '0'
    
        // visited will keep track of all visited edges.
        const visited = new Set()
        
        // The De Bruijn Sequence that will be the output of the function.
        const seq = []
        
        // To generate a De Bruijn sequence we must traverse every combination of size n
        // containing the number from 0 to k - 1. We will start with the prefix of the 
        // combination with all 0s. If n equals 3 and k is greater than 1 our prefix would be
        // 00 and the first combination, our starting edge would be 000.
        const prefix = '0'.repeat(n - 1)
        
        // We will perform a depth first traveral until we visit every edge (combination)
        // while adding the last element of a combination to the sequence.
        dfs(prefix, seq, visited, k)
    
        // We append the original prefix to the sequence as the a De Bruijn sequence 
        // ends with the first combination. If we reverse the sequence it would still be 
        // valid and in that case would start with the first combination instead.
        seq.push(prefix)
    
        // Join the array to return the sequence as a string.
        return seq.join('')
}

const dfs = (prefix, seq, visited, k) => {
    for (let i = 0; i < k; i++) {
        // Generate a new combination using all the numbers from 0 to k - 1
        // this will give us all the edges that are adjacent to the previous
        // combination.
        const combination = prefix + i.toString()
        
        // Check if the current combination has been visited we skip it.
        if (visited.has(combination)) continue
        
        // If the current combination hasn't been visited add it to the visited set
        // so we do no revisit it.
        visited.add(combination)
        
        // Create a new prefix using the current combination
        // and continue the depth first traversal.
        dfs(combination.slice(1), seq, visited, k)
        
        // Add the last element of the visited combination to the sequence.
        seq.push(i)
    }
}