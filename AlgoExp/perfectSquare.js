
//Given a positive integer n, find the least number of perfect square numbers 
//(for example, 1, 4, 9, 16, ...) which sum to n.

//Example 1:

//Input: n = 12
//Output: 3 
//Explanation: 12 = 4 + 4 + 4.
//Example 2:

//Input: n = 13
//Output: 2
//Explanation: 13 = 4 + 9.

var numSquares=n=>{

    //returns if the number x is a valid square root ( can be represented as the square of an integer)
    let isSquare=x=>Math.floor(Math.sqrt(x))**2===x


    if(isSquare(n))return 1 // that would be the fact that its equal to itself

    // Legendre's three square theorem: A natural number n can be represented as 
	// the sum of three squares of integers if and only if : n!= 4^x ( 8*m+7)
    while(n%4===0) n/=4
    if(n%8===7)return 4 // if n%8!==7 that means that my number can be written 
	// as a sum  at of at most 3 squares
	// , otherwise the answer is definitely 4 because of Lagrange's theorem.
    // ok, we ruled out the possibility of result 4
    // there are only 2 results remaining, 2 and 3

    // Manually checking for result 2
    for (let i = 0; i <=n ; i++) {
        // if x=n-i*i   and x is a valid square then OBVIOUSLY
        // n=i^2 +sqrt(x)^2  ,so n is a square of two numbers   
        if(isSquare(n-i*i))return 2
    }

    // otherwise
    return 3
}