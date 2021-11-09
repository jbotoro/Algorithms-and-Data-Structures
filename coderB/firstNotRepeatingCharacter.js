// input: string 
// input only contains lowercase letters
// input string length -  1 <= N <= 100000

// find first non repreating character in the string

// ex "aaabcccdeeef" => 'b'
// ex "abcbad" => 'c'
// ex "abcabcabc" => "_"

let ex1 = "aaabcccdeeef";
let ex2 = "abcbad";
let ex3 = "abcabcabc";


const firstNonRepeatingCharacter = (s) => {
    let map = {};

    for(let i = 0; i < s.length; i++){
        let char = s.charAt(i)
        if(map[char]){
            map[char]++;
        } else{
            map[char] = 1;
        }
    }

    for( let i = 0; i < s.length; i++){
        let char = s.charAt(i);
        if(map[char] === 1) return char
    }

    return '_'
}

console.log(firstNonRepeatingCharacter(ex1));
console.log(firstNonRepeatingCharacter(ex2));
console.log(firstNonRepeatingCharacter(ex3));


