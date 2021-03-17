// Given an m x n matrix of positive integers representing the height of each unit cell in a 2D elevation map, compute the volume of water it is able to trap after raining.

// Example:

// Given the following 3x6 height map:
// [
//   [1,4,3,1,3,2],
//   [3,2,1,3,2,4],
//   [2,3,3,2,3,1]
// ]

// Return 4.


// The above image represents the elevation map [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]] before the rain.

 



// After the rain, water is trapped between the blocks. The total volume of water trapped is 4.

 

// Constraints:

// 1 <= m, n <= 110
// 0 <= heightMap[i][j] <= 20000

/**
create minheap consisting of all borders

while heap not empty
  take min
  search each direction
  if not visited
    if depth lower than waterline
      add diff to total
    add to visited
    add to heap
return total
 */

const trapRainWater = map => {
    const heap = createMinHeap()
    const visited = new Set()
    let total = 0
    let waterline = 0
    
    // add borders
    const endj = map[0].length - 1
    const endi = map.length - 1
    for ( let i = 1; i < endi; i++ ) {
        visited.add( i )
        visited.add( i + .1 / endj)
        heap.add([ i, 0, map[i][0] ])
        heap.add([ i, endj, map[i][endj] ])
    }
    for ( let j = 1; j < endj; j++ ) {
        visited.add( .1 / j )
        visited.add( endi + .1 / j)
        heap.add([ 0, j, map[0][j] ])
        heap.add([ endi, j, map[endi][j] ])
    }
    
    // by working at the min border and moving in
    // its known that any depth below waterline will pool
    while ( heap.size() ) {
        const [ i, j, d ] = heap.takeMin()
        waterline = Math.max( waterline, d )
        
        dirs( i, j ).forEach( ([ di, dj ]) => {
            const key = di + .1 / dj
            if ( visited.has( key ) || di <= 0 || dj <= 0 || di >= endi || dj >= endj ) return
            visited.add( key )
            var newd = map[ di ][ dj ]
            
            if ( newd < waterline ) {
                total += waterline - newd
            }
            
            heap.add([ di, dj, newd ])
        })
    }
    
    return total
}

const createMinHeap = () => {
    const heap = [null]
    const leftChild = x => x * 2
    const rightChild = x => x * 2 + 1
    const parent = x => Math.floor( x / 2 )

    return {
        heap,
        size: () => heap.length - 1,
        takeMin: () => {
            if ( heap.length === 2 ) return heap.pop()
            const min = heap[1]
            const last = heap.length - 1
            let l, r, c, index = 1
            
            // swap w/ last in arr && pop
            heap[1] = heap.pop()

            // percolate down
            while ( index < last ) {
                l = leftChild( index )
                r = rightChild( index )
                c = heap[r] && heap[r][2] < heap[l][2] ? r : l

                if ( heap[c] && heap[c][2] < heap[index][2] ) {
                    let hold = heap[c]
                    heap[c] = heap[index]
                    heap[index] = hold
                    index = c
                } else {
                    break
                }
            }
            
            while ( ! heap[ heap.length - 1 ] ) heap.pop()
            return min
        },
        add: tile => {
            // push to end
            let pi, index = heap.length
            
            // percolate up until parent <= tile
            while ( 1 < index ) {
                pi = parent( index )
                
                if ( heap[ pi ] && heap[ pi ][2] <= tile[2] ) break

                heap[ index ] = heap[ pi ]
                index = pi
            }
            heap[ index ] = tile
            
            while ( ! heap[ heap.length - 1 ] ) heap.pop()
        }
    }
}

const dirs = ( i, j ) => [ [ i + 1, j ], [ i - 1, j ], [ i, j + 1 ], [ i, j - 1 ] ]