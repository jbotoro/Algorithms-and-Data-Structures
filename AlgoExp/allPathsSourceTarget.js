// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1, and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

 

// Example 1:


// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
// Example 2:


// Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
// Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
// Example 3:

// Input: graph = [[1],[]]
// Output: [[0,1]]
// Example 4:

// Input: graph = [[1,2,3],[2],[3],[]]
// Output: [[0,1,2,3],[0,2,3],[0,3]]
// Example 5:

// Input: graph = [[1,3],[2],[3],[]]
// Output: [[0,1,2,3],[0,3]]
 

// Constraints:

// n == graph.length
// 2 <= n <= 15
// 0 <= graph[i][j] < n
// graph[i][j] != i (i.e., there will be no self-loops).
// The input graph is guaranteed to be a DAG.


// BFS

var allPathsSourceTarget = function(graph) {
    const adj = new Map()
    const N = graph.length-1
    const res = []
    for(let i=0;i<graph.length;i++){
        adj.set(i, new Set(graph[i]))
    }
    
    const queue = [[0, new Set()]]
    while(queue.length){
        const [node, set] = queue.shift()
        set.add(node)
        if(node === N){      
        res.push([...set])
        }
        for(let k of adj.get(node)){
        queue.push([k, new Set(set)])
        }
    }
    return res
};


// DFS 
var allPathsSourceTarget = function(graph) {
    const adj = new Map()
    const N = graph.length-1
    const res = []
    for(let i=0;i<graph.length;i++){
        adj.set(i, new Set(graph[i]))
    }
    
    function dfs(idx, path){
        path.push(idx)
        if(N === idx){
        res.push(path)
        return res
        }    
        adj.get(idx).forEach((v,i)=>{
        dfs(v, path.slice())
        })
        return res
    }
    dfs(0, [])
    return res
};