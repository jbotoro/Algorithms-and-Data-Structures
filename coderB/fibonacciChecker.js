// Fibonacci Checker

// Have the function FibonacciChecker(num) return the string yes if the number 
// given is part of the Fibonacci sequence. This sequence is defined by: 
// Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. 
// The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not 
// in the Fibonacci sequence, return the string no.

// Examples
// Input: 34
// Output: yes
// Input: 54
// Output: no

function FibonacciChecker(num) { 

  let start = [1, 1];
  let current = 0;

  if(num === 1) return 'yes';

  for(let i = 2; i < num; i++){
    let currentFib = start[i - 1] + start[i - 2];
    current = currentFib;
    start.push(currentFib);

    if (current === num) return 'yes';

  }

  return 'no';

}