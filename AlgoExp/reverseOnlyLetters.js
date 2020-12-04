// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

 

// Example 1:

// Input: "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"
 

// Note:

// S.length <= 100
// 33 <= S[i].ASCIIcode <= 122 
// S doesn't contain \ or "

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    if (S.length < 2) return S;
    const a = S.split('');
    let i = 0;
    let j = S.length - 1;
    while (i < j) {
        while (!/[a-zA-Z]/.test(S[i])) i++;
        while (!/[a-zA-Z]/.test(S[j])) j--;
        if (i < j) [a[i], a[j]] = [a[j], a[i]];
        i++;
        j--;
    }
    return a.join('');
};