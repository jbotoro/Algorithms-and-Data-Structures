// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. Each operand may be an integer or another expression.

// Note:

// Division between two integers should truncate toward zero.
// The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.
// Example 1:

// Input: ["2", "1", "+", "3", "*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: ["4", "13", "5", "/", "+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:

// Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
// Output: 22
// Explanation: 
//   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

function evalRPN(tokens: string[]): number {
    let a: number, b: number;
    let index: number = 0;
    while(tokens.length > 1) { 
        b = parseInt(tokens[index - 1]);
        a = parseInt(tokens[index - 2]);
        switch(tokens[index]) {
            case "+": 
                // console.log(`evaluating ${a} + ${b}`);
                tokens.splice(index - 2, 3, (a + b).toString());
                index -= 2;
                break;
            case "-": 
                // console.log(`evaluating ${a} - ${b}`);
                tokens.splice(index - 2, 3, (a - b).toString());
                index -= 2;
                break;
            case "/": 
                // console.log(`evaluating ${a} / ${b}`);
                tokens.splice(index - 2, 3, (a / b > 0 ? Math.floor(a / b): Math.ceil(a / b)).toString());
                index -= 2;
                break;
            case "*": 
                // console.log(`evaluating ${a} * ${b}`);
                tokens.splice(index - 2, 3, (a * b).toString());
                index -= 2;
                break;
            default: 
                index++;
                break;
        }
        // console.log(tokens);
    }
    return parseInt(tokens[0]);
};