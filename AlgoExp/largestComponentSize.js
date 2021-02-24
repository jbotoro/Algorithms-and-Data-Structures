// Given a non-empty array of unique positive integers A, consider the following graph:

// There are A.length nodes, labelled A[0] to A[A.length - 1];
// There is an edge between A[i] and A[j] if and only if A[i] and A[j] share a common factor greater than 1.
// Return the size of the largest connected component in the graph.

 

// Example 1:

// Input: [4,6,15,35]
// Output: 4

// Example 2:

// Input: [20,50,9,63]
// Output: 2

// Example 3:

// Input: [2,3,6,7,4,12,21,39]
// Output: 8

// Note:

// 1 <= A.length <= 20000
// 1 <= A[i] <= 100000

/**
 * @param {number[]} A
 * @return {number}
 */
var largestComponentSize = function(A) {

    // edge case
    if (A.length < 2) {
        return A.length;
    }
    
    var UnionFind = function (A) {
        
        // the number of elements
        this.size = A.length;
        
        // "who is my parent" array
        this.ids = [];
        
        // sizes of each component
        this.sizes = [];
        
        // how many components do we have. if we don't union, it's A.length
        this.numComponents = this.size;
        
        var i, l;
        
        for ( i = 0, l = A.length; i < l; i++) {
            // Initially, everyone is alone and a parent
            this.ids[i] = i;
            this.sizes[i] = 1;
        }
        
        
        this.find = function (node) {
            let root = node;
            
            // find the root of node
            while (this.ids[root] !== root) {
                root = this.ids[root];
            }
            
            // Our job is in principle done, but the following
            // collapses/compresses the node -> root chain for faster future lookups
            
            while (node !== root) {
                // grab who node is pointing to immediately
                let next = this.ids[node];
                
                // set root directly
                this.ids[node] = root
                
                // do the same for parents of node
                node = next;
            }
            
            return root;
        }
        
        this.union = function(a, b) {
            let rootA = this.find(a);
            let rootB = this.find(b);
            
            // check if they're already in the same component
            if (rootA === rootB) {
                return;
            }
            
            // otherwise we need to merge
            // if we merge the smaller component into the bigger one,
            // we can save on some compression time
            
            if (this.sizes[rootA] > this.sizes[rootB]) {
                // fix the new size
                this.sizes[rootA] += this.sizes[rootB];
                
                // set the new root
                this.ids[rootB] = rootA;
                
            } else {
                // fix the new size
                this.sizes[rootB] += this.sizes[rootA];
                
                // set the new root
                this.ids[rootA] = rootB;
                
            }
            
            // Since the roots found are different we know that the
            // number of components/sets has decreased by one
            this.numComponents--;
            
        }
        
    }
    
    // I stole this. I want to get back to my Sunday and play some games
    function primeFactorsTo (max) {
        var store  = [], i, j, primes = [];
        for (i = 2; i <= max; ++i) 
        {
            if (!store [i]) 
              {
                primes.push(i);
                for (j = i << 1; j <= max; j += i) 
                {
                    store[j] = true;
                }
            }
        }
        return primes;
    }
    
    var map = {}; // store each index of A with the prime it can be factored by
    var i, l;
    var max = 0; // we only need to make primes up to the highest number in A
    var primes;
    var uf = new UnionFind(A); // isn't she beautiful
    
    // find largest number to prime up to
    for (i = 0, l = A.length; i < l; i++) {
        max = Math.max(max, A[i]);
    }
    
    // create primes array
    primes = primeFactorsTo(max);
    
    // per number in A, find the primes you can divide it with
    for (i = 0, l = A.length; i < l; i++) {
        
        for (prime of primes) {
            if (A[i] % prime === 0) {
                if (!map[prime]) {
                    map[prime] = [];
                }
                map[prime].push(i);
            }
        }
        
    }
    
    // Now I have a cool table like this:
    // { '2': [ 0, 1 ], '3': [ 1, 2 ], '5': [ 2, 3 ], '7': [ 3 ] }
    // Now we just merge all of those    
    
    for (let entry in map) {
        // for each array in map, merge the numbers with the first one
        // note that I start from the 2nd number, and merge with the first
        // that implies an entry like '7': [3] is skipped, as intented.
        for (i = 1, l = map[entry].length; i < l; i++) {
            uf.union(map[entry][0], map[entry][i]);
        }        
    }
    
    // scan UF for largest size
    let largest = 1;
    for (i = 1, l = uf.sizes.length; i < l; i++) {
        largest = Math.max(largest, uf.sizes[i]);
    }
        
    return largest;
};