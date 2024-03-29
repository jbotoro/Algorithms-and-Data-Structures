// Largest Row Column

// Have the function LargestRowColumn(strArr) read the strArr parameter being 
// passed which will be a 2D matrix of some arbitrary size filled with positive 
// integers. Your goal is to determine the largest number that can be found by 
// adding up three digits in the matrix that are within the same path, where 
// being on the same path means starting from one of the elements and then 
// moving either up, down, left, or right onto the next element without 
// reusing elements. One caveat though, and that is when you calculate the 
// sum of three digits, you should split the sum into two digits and treat 
// the new digits as a row/column position in the matrix. So your goal is 
// actually to find the sum of three digits that sums to the largest position in 
// the matrix without going out of the bounds. For example: if strArr 
// is ["345", "326", "221"] then this looks like the following matrix:

// 3 4 5
// 3 2 6
// 2 2 1

// The solution to this problem is to sum the bolded elements, 4 + 2 + 6, which 
// equals 12. Then you take the solution, 12, and split it into two digits: 1 and 
// 2 which represents row 1, column 2 in the matrix. This is the largest position 
// you can get in the matrix by adding up 3 digits so your program should return 
// 12. If you for example added up 4 + 5 + 6 in the matrix you would get 15 which 
// is larger than 12, but row 1, column 5 is out of bounds. It's also not possible 
// with the current matrix to sum to any of the following numbers: 20, 21, 22. 
// If you find a sum that is only a single digit, you can treat that as row 0, 
// column N where N is your sum.

// Examples
// Input: ["234", "999", "999"]
// Output: 22
// Input: ["11111", "22222"]
// Output: 4

function LargestRowColumn(strArr) { 
  const maxRow = strArr.length -1;
  const maxCol = strArr[0].length - 1;
  const dirs = [[1,0],[-1,0], [0, 1], [0, -1]];
  let largest = -Infinity;

  for (let i = 0; i < strArr.length; i++){
    for (let j = 0; j < strArr[0].length; j++){
      const pos = [i, j]
      const num = parseInt(strArr[i][j]);

      dfs(pos, num);
    }
  }

  return largest;
  
  function dfs(currPos, sum, prevPos, count=2){
    // console.log(currPos, sum, prevPos, count)
    if (count === 0){
      if (inBound(sum)){
        largest = largest < sum ? sum : largest;
      }
      return;
    }

    dirs.forEach((dir) => {
      const [dx, dy] = dir;
      const [nx, ny] = [currPos[0] + dx, currPos[1] + dy];
      if (nx > maxRow || ny > maxCol || nx < 0 || ny < 0) return;
      if (prevPos !== undefined && (prevPos[0] === nx && prevPos[1] === ny) ) return;
      const num = parseInt(strArr[nx][ny])
      return dfs([nx, ny], sum + num, currPos, count - 1);
    })
  }

  function inBound(num){
    let row, col;
    
    if (num > 9){
      col = num % 10;
      row = (num - col) / 10
    } else {
      row = 0;
      col = num;
    }
    // console.log(maxRow, row, maxCol, col)
    return maxRow >= row && maxCol >= col
  }

}