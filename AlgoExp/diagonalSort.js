// A matrix diagonal is a diagonal line of cells starting from some cell in either 
//the topmost row or leftmost column and going in the bottom-right direction 
//until reaching the matrix's end. For example, the matrix diagonal starting 
//from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], 
//mat[3][1], and mat[4][2].

// Given an m x n matrix mat of integers, sort each matrix diagonal in ascending 
//order and return the resulting matrix.

 

// Example 1:


// Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
// Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    let map = {}
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            let d = i-j
            if(!map[d]){
                map[d]=[]
            }
            map[d].push(mat[i][j])
        }
    }
    for(let key in map){
        map[key].sort((a,b)=>{return a-b})
    }
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            let d = i-j
            mat[i][j] = map[d].shift()
        }
    }
    return mat
};