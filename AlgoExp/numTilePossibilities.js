// You have n  tiles, where each tile has one letter tiles[i] printed on it.

// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

 

// Example 1:

// Input: tiles = "AAB"
// Output: 8
// Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
// Example 2:

// Input: tiles = "AAABBC"
// Output: 188
// Example 3:

// Input: tiles = "V"
// Output: 1
 

// Constraints:

// 1 <= tiles.length <= 7
// tiles consists of uppercase English letters.

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    if (tiles.length === 0) {
        return 0;
    }
    
    let count = 0;
    const set = new Set();
    
    // break down tiles and count possible combinations
    for (let i = 0; i < tiles.length; i++) {
        // skip if the tile is visited before for duplicated tiles
        if (set.has(tiles[i])) {
            continue;
        }
        // count all the sub combinations
        count += numTilePossibilities(tiles.slice(0, i) + tiles.slice(i + 1)) + 1;
set.add(tiles[i]);
    }
    
    return count;
};