// An undirected, connected graph of N nodes (labeled 0, 1, 2, ..., N-1) is given as graph.

// graph.length = N, and j != i is in the list graph[i] exactly once, if and only if nodes i and j are connected.

// Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.

 

// Example 1:

// Input: [[1,2,3],[0],[0],[0]]
// Output: 4
// Explanation: One possible path is [1,0,2,0,3]
// Example 2:

// Input: [[1],[0,2,4],[1,3,4],[2],[1,2]]
// Output: 4
// Explanation: One possible path is [0,1,4,2,3]
 

// Note:

// 1 <= graph.length <= 12
// 0 <= graph[i].length < graph.length


class Node {
    constructor(id, mask) {
        this.mask =  mask;
        this.id = id;
    }
    
    toString() {
        return [this.id,this.mask].join(':');
    }
};


/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    const length = graph.length;
    if(length === 0) {
        return 0;
    }
    const q = [];
    const visited = new Set();
    
    for (let x = 0; x < length; ++x) {
        const node = new Node(x, 1<<x);
        q.push(node);
        visited.add(node.toString());
    }
    const fullMask = (1<<length) - 1;
    let level = 0;
    //console.log(q, visited);
    while (q.length) {
        const size = q.length;
        
        for (let i = 0; i < size; i++) {
            const node = q.shift();
            if (node.mask === fullMask) {
                return level;
            }
            //console.log(graph[node.id]);
            for (let next of graph[node.id]) {
                // all neighbour of node.id
                //console.log(next, node.mask, (node.mask | (1 << next)));
                const nextNode = new Node(next, (node.mask | (1 << next)));
                if (visited.has(nextNode.toString())) {
                    continue;
                }
                q.push(nextNode);
                visited.add(nextNode.toString());
            }
        }
        level++;
    }
    
    
    return 0;
};