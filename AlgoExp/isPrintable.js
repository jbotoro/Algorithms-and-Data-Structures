// There is a strange printer with the following two special requirements:

// On each turn, the printer will print a solid rectangular pattern of a single color on the grid. This will cover up the existing colors in the rectangle.
// Once the printer has used a color for the above operation, the same color cannot be used again.
// You are given a m x n matrix targetGrid, where targetGrid[row][col] is the color in the position (row, col) of the grid.

// Return true if it is possible to print the matrix targetGrid, otherwise, return false.

 

// Example 1:



// Input: targetGrid = [[1,1,1,1],[1,2,2,1],[1,2,2,1],[1,1,1,1]]
// Output: true
// Example 2:



// Input: targetGrid = [[1,1,1,1],[1,1,3,3],[1,1,3,4],[5,5,1,4]]
// Output: true
// Example 3:

// Input: targetGrid = [[1,2,1],[2,1,2],[1,2,1]]
// Output: false
// Explanation: It is impossible to form targetGrid because it is not allowed to print the same color in different turns.
// Example 4:

// Input: targetGrid = [[1,1,1],[3,1,3]]
// Output: false
 

// Constraints:

// m == targetGrid.length
// n == targetGrid[i].length
// 1 <= m, n <= 60
// 1 <= targetGrid[row][col] <= 60

// isPrintable returns true if every color in the grid could have been a valid rectangle
const isPrintable = grid => {

    // obtain info on each color
    const colors = new Map()
    grid.forEach( ( row, i ) => {
        row.forEach( ( color, j ) => {

            let o = colors.get( color )
            if ( ! o ) {
                o = { left: Infinity, right: -Infinity, top: Infinity, bottom: -Infinity } 
                colors.set( color, o )
            }

            o.left   = Math.min( j, o.left )
            o.right  = Math.max( j, o.right )
            o.top    = Math.min( i, o.top )
            o.bottom = Math.max( i, o.bottom )

        })
    })

    // get every color key  this will serve to track which colors we need to validate
    const tofind = new Set([...colors.keys()])
    
    // a color is considered a rectangle if the cells of it's 4 corners and inwards
    // contain only that color. Colors already validated could have been printed on top
	// so we'll give those a pass too, and only break if it's a color we've yet to find
    const isRectangle = ( color, { left, right, bottom, top } ) => {

        for ( let i = top; i <= bottom; i++ ) {
            for ( let j = left; j <= right; j++ ) {

                if ( grid[i][j] != color && tofind.has( grid[i][j] ) ) {

                    return false
                    
                }

            }
        }
        
        return true

    }

    // if a new rectangle is found that means it could uncover new, additional rectangles,
    // so keep looping while new rectangles are found
    let keepLooping = true
    while ( keepLooping ) {

        keepLooping = false
        
        colors.forEach( ( info, color ) => {

            if ( ! tofind.has( color ) ) return

            if ( isRectangle( color, info ) ) {
                keepLooping = true
                
                tofind.delete( color )
            }

        })

    }
    
    return tofind.size === 0
}