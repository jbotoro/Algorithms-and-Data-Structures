// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// You may assume that both strings contain only lowercase letters.

var canConstruct = function(ransomNote, magazine) {
    const map = {};
    
    for(let i = 0; i < magazine.length; i++) {
        map[magazine[i]] = (map[magazine[i]] || 0) + 1; 
    }
    
    for(let i = 0; i < ransomNote.length; i++) {
        if(!map[ransomNote[i]]) return false;
        map[ransomNote[i]]--;
    }
    return true
};