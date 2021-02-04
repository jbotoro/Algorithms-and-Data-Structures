#
#
#// A valid encoding of an array of words is any reference string s and array of indices indices such that:
#
#// words.length == indices.length
#// The reference string s ends with the '#' character.
#// For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next '#' character is equal to words[i].
#// Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.
#
# 
#
#// Example 1:
#
#// Input: words = ["time", "me", "bell"]
#// Output: 10
#// Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
#// words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
#// words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
#// words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#"
#// Example 2:
#
#// Input: words = ["t"]
#// Output: 2
#// Explanation: A valid encoding would be s = "t#" and indices = [0].
#
#
#
#// Constraints:
#
#// 1 <= words.length <= 2000
#// 1 <= words[i].length <= 7
#// words[i] consists of only lowercase letters.
#
## First, create an array out of each word, after turning each word into a
## reversed array of letters, then sort that overall array of arrays. Now,
## for each [i] in the array, if it matches the first [i].length letters of
## [i+1], it's the tail end of that longer word, and you can throw it out.
## This will work even for multiple nested words, e.g., "ice", "mice",
## "pumice"...
##
## @param {String[]} words
## @return {Integer}
def minimum_length_encoding(words)
    arr = words.map {|word| word.split("").reverse }
    arr.sort!
    count = 0
    for i in 0...arr.length-1
        count += arr[i].length+1 if arr[i]!=arr[i+1][0...arr[i].length]
    end
    count += arr[-1].length+1
    return count
    
end
