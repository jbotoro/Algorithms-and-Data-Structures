// Given a string (){}[]
//input string is valid if open bracket is closed by same bracket type 
//in correct order
//

// str => iterate => push into stack '(' or '[' or '{' => 


//example 1 
// '()' => true
//example 2
// '()[]{}' => true
//example 3
// '}[[]]{' => false
// example 4
// ')()' => false
// example 5
// '{[]}' => true

// ['{','[',]
function validParentheses(str) {
    let stack = [];
    let parens = { '}' : '{', ']' : '[', ')' : '('}
    

    for(let i = 0; i < str.length;i++){
        if( str[i] === '{' || str[i] === '[' || str[i] === '('){
            stack.push(str[i])
        } else if( str[i] === '}' || str[i] === ']' || str[i] === ')') {
            if(stack.length === 0) return false
            
            if(parens[str[i]] === stack[stack.length - 1]){
                stack.pop()
            } else {
                return false
            }
        }
    }
    
    return stack.length === 0;
}

const example1 = '()'; // => true
const example2 = '()[]{}'; // => true
const example3 = '}[[]]{'; // => false
const example4 = ')()'; // => false
const example5 = '{[]}'; //=> true
const example6 = '([)]'; // => false

// ['(','[',]





// console.log(validParentheses(example1));
// console.log(validParentheses(example2));
// console.log(validParentheses(example3));
// console.log(validParentheses(example4));
// console.log(validParentheses(example5));
// console.log(validParentheses(example6));



// Given array of integers elements ABC in nums
// find all unique triplets whose sum is zero
// negative and positive nums 

//example input [-1,0,1,2,-1,-4]
//example output [[-1,0,1],[-1,-1,2]]

// [arr] => iteration 2 for loops =>

function threeSum(nums) {
    if(!nums || nums.length < 3) return [];

    nums.sort((a,b) => a - b)
    return tripleZeroSum(nums)
}

function tripleZeroSum(arr) {
    let res = [];
    const len = arr.length;

    for(let i = 0; i < len; i++){
        if( i !== 0 && arr[i] === arr[i-1]){
            continue;
        }
        const map = new Map();

        for(let j = i + 1; j < len; j++){
            if(map.has((-arr[i]-arr[j]))){
                res.push([arr[i], arr[j], (-arr[i] - arr[j])])
            }

            while(j + 1 < len && arr[j] === arr[j+1]){
                j++;
            }
            map.set(arr[j])
        }
    }

    return res;

}

const example7 = [-1,0,1,2,-1,-4];

console.log(threeSum(example7))
