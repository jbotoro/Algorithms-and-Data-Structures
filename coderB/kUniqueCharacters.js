// K Unique Characters

// Have the function KUniqueCharacters(str) take the str parameter being passed 
// and find the longest substring that contains k unique characters, where k will 
// be the first character from the string. The substring will start from the 
// second position in the string because the first character will be the integer 
// k. For example: if str is "2aabbacbaa" there are several substrings that all 
// contain 2 unique characters, namely: ["aabba", "ac", "cb", "ba"], but your 
// program should return "aabba" because it is the longest substring. If there 
// are multiple longest substrings, then return the first substring encountered 
// with the longest length. k will range from 1 to 6.

// Examples
// Input: "3aabacbebebe"
// Output: cbebebe
// Input: "2aabbcbbbadef"
// Output: bbcbbb

function KUniqueCharacters(str) {  
let  arr = [];
let longest = str[0];
 
for (let i=1; i<str.length; i++) {
    let table = {}
    let ans = ""
    let count = 0
        for (let j=i; j<str.length; j++) {
            if (table[str[j]] === undefined) { 
                table[str[j]] = 1
                count++
            }
            if (count <= str[0]) {
                ans += str[j]
            }
        }
        if (ans.length > longest) {
            longest = ans.length
            arr.push(ans)
        }
}
return arr.sort(function(a,b) {return b.length-a.length})[0]
} 