
// Solve a given equation and return the value of x in the form of string "x=#value". The equation contains only '+', '-' operation, the variable x and its coefficient.

// If there is no solution for the equation, return "No solution".

// If there are infinite solutions for the equation, return "Infinite solutions".

// If there is exactly one solution for the equation, we ensure that the value of x is an integer.

// Example 1:
// Input: "x+5-3+x=6+x-2"
// Output: "x=2"
// Example 2:
// Input: "x=x"
// Output: "Infinite solutions"
// Example 3:
// Input: "2x=x"
// Output: "x=0"
// Example 4:
// Input: "2x+3x-6x=x+2"
// Output: "x=-1"
// Example 5:
// Input: "x=x+2"
// Output: "No solution"

var solveEquation = function(equation) {
    const sides = equation.split('=');
    const left = evalSide(sides[0]);
    const right = evalSide(sides[1]);
    left.x -= right.x;
    left.c -= right.c;
    return left.x ? `x=${-left.c / left.x}` : left.c ? 'No solution' : 'Infinite solutions';
};

function evalSide(side) {
    const res = { x: 0, c: 0 };
    let re = /-?(\d*x|\d+)/g, match;
    while (match = re.exec(side)) {
        let val = match[0].replace('x', '');
        if (match[0] === val) {
            res.c += parseInt(val);
        } else if (val === '-') {
            res.x--; 
        } else {
            res.x += parseInt(val || 1); 
        }
    }
    return res;
}