// Given a chemical formula (given as a string), return the count of each atom.

// An atomic element always starts with an uppercase character, then zero or more 
//lowercase letters, representing the name.

// 1 or more digits representing the count of that element may follow if the count 
//is greater than 1. If the count is 1, no digits will follow. For example, H2O 
//and H2O2 are possible, but H1O2 is impossible.

// Two formulas concatenated together produce another formula. For example, 
//H2O2He3Mg4 is also a formula.

// A formula placed in parentheses, and a count (optionally added) is also a 
//formula. For example, (H2O2) and (H2O2)3 are formulas.

// Given a formula, output the count of all elements as a string in the following 
//form: the first name (in sorted order), followed by its count (if that count 
//is more than 1), followed by the second name (in sorted order), followed by 
//its count (if that count is more than 1), and so on.

// Example 1:
// Input: 
// formula = "H2O"
// Output: "H2O"
// Explanation: 
// The count of elements are {'H': 2, 'O': 1}.
// Example 2:
// Input: 
// formula = "Mg(OH)2"
// Output: "H2MgO2"
// Explanation: 
// The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
// Example 3:
// Input: 
// formula = "K4(ON(SO3)2)2"
// Output: "K4N2O14S4"
// Explanation: 
// The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.
// Note:

// All atom names consist of lowercase letters, except for the first character 
//which is uppercase.
// The length of formula will be in the range [1, 1000].
// formula will only consist of letters, digits, and round parentheses, and is a 
//valid formula as defined in the problem.

/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
    let stack = []; // for breaking up the formula, so that we can solve it later;
    let count = {}; // to keep track of the number of Atoms
    let temp = '';  // for temporary sotring string chracters
    let mulArr = [1] // arr to save multiplication numbers
    
    // to store number of atoms if there are, 
    //taking it as 1 because we will not write the number of atom if it is 1
    let last = '1'  
    
    for (let i = 0; i < formula.length; i++) {
        
        if (isUpperCase(formula[i])) {
            
            if (temp) stack.push(temp);
            temp = formula[i];
            
        } else {
            // if brackets, push temp and brackets to stack
            if (formula[i] === '(' || formula[i] === ')') {
                
                if (temp) stack.push(temp)
                temp = ''                
                stack.push(formula[i]);
                
            }else if (isLowerCase(formula[i])) {
                temp += formula[i];
            } else {
                // at this point, I know that character is a number
                // so if there exists an Atom at  0th index of temp
                // then push it to the stack and then store number as string in stack
                if (isUpperCase(temp[0])) {
                    stack.push(temp);
                    temp = ''
                }
                temp += formula[i]
            }
            
        }
        // if there is anything in the temp at final index
        // push it in stack
        if (i === formula.length - 1) stack.push(temp);
    }
    
    
    // in this loop we are evaluating the result from the stack
    // we are looping in reverse order so that we can multiply effectively
    // e.g O2(PH)2 => in general intution, 
    // we always multiply the inner content with the number outside of bracket
    // whether it is on left or right
    // but in this question we are gievn that the count will always be on right side of Atom
    // so (OH)2, here O and H each have a count 2, which is written on right side
    // so we multiply with the number written on right
    for (let i = stack.length -1 ; i >= 0; i--) {
        
        // if it is a number
        if ( (stack[i] | 0) > 0 ) {
            // if next char is a bracket then we know that the stuff inside the bracket
            // will be multiplied by the number
            // adding the number to multiply with in array
            if (stack[i-1] === ')') {
                mulArr.push(mulArr[mulArr.length-1] * stack[i]);    
            } else {
                // if not then save in it last number
                // so that we can add that number as count to the Atom next to it
                last = stack[i]
            }
            
        } 
        // if it is closing bracket
        else if ( stack[i] === ')' ) {
            continue;
        }
        
        // if it is openeing bracket
        else if ( stack[i] === '(' ) {
            // it means that the number outside of bracket is multiplied successfully
            // and we do not need it anymore
            mulArr.pop();
        }
        
        // if it is an Atom
        else {
            // if in count map atom is already present then sum that value as well
            // use the last element of multiplied array and multiplied it with last
            // this is multiplying the number outside of bracket to the inner number
            count[stack[i]] = (count[stack[i]] | 0) + mulArr[mulArr.length-1] * last;
            last = '1'
        }
        
    }
    //sorting the objectKeys lexicographically and adding them in final string
    return Object.keys(count).sort().reduce((final, atom) => {
        final += atom + (count[atom] > 1 ? count[atom] : '')
        return final
    }, '')
    return ans
    
};

function isUpperCase (char) {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ()".indexOf(char) > -1
}
function isLowerCase (char) {
    return "abcdefghijklmnopqrstuvwxyz".indexOf(char) > -1
}