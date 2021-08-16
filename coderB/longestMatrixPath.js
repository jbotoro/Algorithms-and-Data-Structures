// Longest Matrix Path

// Have the function LongestMatrixPath(strArr) take the array of strings stored in 
// strArr, which will be an NxM matrix of positive single-digit integers, and find 
// the longest increasing path composed of distinct integers. When moving through 
// the matrix, you can only go up, down, left, and right. For example: if strArr 
// is ["345", "326", "221"], then this looks like the following matrix:


// 3 4 5
// 3 2 6
// 2 2 1

// For the input above, the longest increasing path goes from: 3 -> 4 -> 5 -> 6. 
// Your program should return the number of connections in the longest path, so 
// therefore for this input your program should return 3. There may not 
// necessarily always be a longest path within the matrix.

// Examples
// Input: ["12256", "56219", "43215"]
// Output: 5
// Input: ["67", "21", "45"]
// Output: 3


0
function LongestMatrixPath(strArr) { 
  const memo = {};
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const ymax = strArr.length;
  const xmax = strArr[0].length;

  const dfs = (arr,x,y,memo) => {
    let max = 0;
    let key = x.toString()+y.toString();
    if (key in memo) return memo[key];
    for (const dir of dirs) {
      let newx = x + dir[0];
      let newy = y + dir[1];
      if( newx >= xmax || newx < 0 || newy >= ymax || newy < 0) continue;
      if( arr[newy][newx] <= arr[y][x]) continue;

      let len = 1 + dfs(arr, newx, newy, memo);
      max = Math.max(max, len);
    }
    memo[key] = max;
    return max;
  }

  let max = 0;
  for (let i = 0; i < ymax; i++){
    for (let j = 0; j < xmax; j++){
      let len = dfs(strArr, j, i, memo);
      max = Math.max(max, len);
    }
  }
  // code goes here  
  return max; 

}