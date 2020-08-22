// Given two integers representing the numerator and denominator of a fraction, 
//return the fraction in string format.

// If the fractional part is repeating, enclose the repeating part in parentheses.

// If multiple answers are possible, just return any of them.

// Example 1:

// Input: numerator = 1, denominator = 2
// Output: "0.5"
// Example 2:

// Input: numerator = 2, denominator = 1
// Output: "2"
// Example 3:

// Input: numerator = 2, denominator = 3
// Output: "0.(6)"

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    // Handle zero edge case
    if (numerator === 0) {
        return "0";
    }
    
    // Handle negatives edge cases, work with positive numbers moving forward
    const isNegative = numerator < 0 ? denominator > 0 : denominator < 0;
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    
    // Handle whole number edge case
    const leftSide = Math.floor(numerator / denominator);
    const hasDecimal = (numerator / denominator) % 1 !== 0;
    if (!hasDecimal) {
        return isNegative ? `-${leftSide.toString()}` : leftSide.toString();
    }
    
    // Invoke core algorithm
    const result = [leftSide.toString(), '.'];
    addDecimal(numerator, denominator, leftSide, result);
    
    // Finish handling negatives edge case
    if (isNegative) {
        result.unshift("-");
    }
	
    return result.join('');
};

function addDecimal(numerator, denominator, leftSide, result) {
    // Account for whole number edge case; make numerator less than denominator
    numerator -= (leftSide * denominator);
    
    let idx = 0; // idx of the current digit
    const carries = {}; // carry values to index (within decimal digit chars) mapping
    
    // Loop dividing numerator by denominator and tracking carry at each step
    while (numerator !== 0 && !(numerator in carries)) {
        carries[numerator] = idx++;
        numerator *= 10;
        const nextDigit = Math.floor(numerator / denominator);
        result.push(nextDigit.toString());
        numerator %= denominator;
    }
    
    // If we detected a loop, add the repeating parentheses
    if (numerator in carries) {
        addParens(carries[numerator], result);
    }
}

function addParens(decimalIdx, result) {
    result.splice(2 + decimalIdx, 0, '('); // +2 because decimal point is at idx 1
    result.push(')');
}