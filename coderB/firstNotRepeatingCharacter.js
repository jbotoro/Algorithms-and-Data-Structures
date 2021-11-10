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

// console.log(firstNonRepeatingCharacter(ex1));
// console.log(firstNonRepeatingCharacter(ex2));
// console.log(firstNonRepeatingCharacter(ex3));


const comparisons = (str) => {
    let original = str.slice();
    let subStrs = [];

    let start = 0;
    let len = str.length;
    let count = 0;

    while(start < len){
        let currStr = str.slice(start)
        subStrs.push(currStr)
        start++;
    }

    for(let i = 0; i < subStrs.length; i++){
        let currCount = 0;
        let currStr = subStrs[i];

        for(let j = 0; j < original.length; j++) {
            if(original[j] === currStr[j]){
                currCount++
            } else {
                break
            }
        }
        count += currCount

    }
    return count
}

let ex4 = 'aababbacab';
// aababbacab 10
// ababbacab 1
// babbacab 0
// abbacab 1
// bbacab 0
// bacab 0
// acab 1
// cab 0
// ab 1
// b 0
// => 14
let ex5 = 'abcabcabc';
// abcabcabc 9
// bcabcabc 0
// cabcabc 0
// abcabc 6
// bcabc 0
// cabc 0
// abc 3
// bc 0
// c 0
//  => 18

console.log(comparisons(ex4))
console.log(comparisons(ex5))



