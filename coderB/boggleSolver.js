// Boggle Solver

// Have the function BoggleSolver(strArr) read the array of strings stored in 
// strArr, which will contain 2 elements: the first element will represent a 4x4 
// matrix of letters, and the second element will be a long string of 
// comma-separated words each at least 3 letters long, in alphabetical order, 
// that represents a dictionary of some arbitrary length. For example: strArr 
// can be: ["rbfg, ukop, fgub, mnry", "bog,bop,gup,fur,ruk"]. Your goal is to 
// determine if all the comma separated words as the second parameter exist in 
// the 4x4 matrix of letters. For this example, the matrix looks like the 
// following:

// r b f g
// u k o p
// f g u b
// m n r y

// The rules to make a word are as follows:

// 1. A word can be constructed from sequentially adjacent spots in the matrix, 
// where adjacent means moving horizontally, vertically, or diagonally in any 
// direction.
// 2. A word cannot use the same location twice to construct itself.

// The rules are similar to the game of Boggle. So for the example above, all 
// the words exist in that matrix so your program should return the string true. 
// If all the words cannot be found, then return a comma separated string of the 
// words that cannot be found, in the order they appear in the dictionary.

// Examples
// Input: ["aaey, rrum, tgmn, ball", "all,ball,mur,raeymnl,tall,true,trum"]
// Output: true
// Input: ["aaey, rrum, tgmn, ball", "all,ball,mur,raeymnl,rumk,tall,true,trum,yes"]
// Output: rumk,yes

function BoggleSolver(strArr) {
    const [string, words] = strArr
    const matrix = string.split(", ").map(row => row.split(""))

    const cloneArray = (array) => array.map(row => [...row])

    const search = (array, remaining, x, y) => {
        if (!remaining.length) return true
        const newArray = cloneArray(array)
        newArray[x][y] = 0

        const newRemaining = remaining.slice(1)
        const target = remaining[0]
        for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
            if (!newArray[i]) continue
            if (newArray[i][j] === target && search(newArray, newRemaining, i, j)) return true
        }
        }
    }

    const wordSearch = (word) => {
        for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] === word[0] && search(matrix, word.slice(1), i, j)) return true
        }
        }
    }
    
    const fails = []
    
    for (let word of words.split(",")) {
        if (!wordSearch(word)) {
        fails.push(word)
        }
    }
    return fails.length ? fails.join(",") : true
}
  