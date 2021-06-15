// String Scramble
// Have the function StringScramble(str1,str2) take both parameters being passed and 
// return the string true if a portion of str1 characters can be rearranged to match 
// str2, otherwise return the string false. For example: if str1 is "rkqodlw" and 
// str2 is "world" the output should return true. Punctuation and symbols will not 
// be entered with the parameters.

// Examples
// Input: "cdore" & str2 = "coder"
// Output: true
// Input: "h3llko" & str2 = "hello"
// Output: false


0
function StringScramble(str1,str2) { 

    if (str1.length < str2.length) return false;
    
    var a = str1.split('');
    a.sort();
    var b = str2.split('');
    b.sort();
    
    var i = 0,
        j = 0;
    
    while (i < a.length && j < b.length) {
        if (a[i] == b[j]) {
        i++;
        j++;
        } else {
        i++;
        }
    }
    
    return j == b.length; 
            
}

// this call is needed to test your function
// keep this when you submit your code
StringScramble(str1,str2)        
