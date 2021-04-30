// Find the smallest prime palindrome greater than or equal to N.

// Recall that a number is prime if it's only divisors are 1 and itself, and it is greater than 1. 

// For example, 2,3,5,7,11 and 13 are primes.

// Recall that a number is a palindrome if it reads the same from left to right as it does from right to left. 

// For example, 12321 is a palindrome.

 

// Example 1:

// Input: 6
// Output: 7
// Example 2:

// Input: 8
// Output: 11
// Example 3:

// Input: 13
// Output: 101
 

var primePalindrome = function(n) {
//this first if loop just checks for prime palindromes less than or equal to 11, needed for efficiency later for checking if prime
    if(n <= 11){
        for(n;true;n++){
        let num = `${n}`
        if(num[0] == num[num.length-1]){
        // you can delete isPalindrome(num) and the function entirely, you dont actually need to check if it is a palindrome here because of the last line
        //this is also the only place isPalindrome is used.
            if(isPalindrome(num) && isPrime(n)){
            return n
            }
        }
        }
    }
    while(true){
        let num = nextPalindrome(n) //gets the next palindrome number
        n= +num //saves the next palindrome as an int to n
        let temp = n%10 //get the last integer of n
        //check to see if the number fits the criteria of being a prime number before throwing it into the isPrime method for increased efficiency
        //NOTE: palindrome primes can only end in 1,3,7, or 9
        if(temp!=0 && temp%2!=0 && temp!=5 && (temp==1 || temp==3 || temp==7 || temp==9)){ 
            if(isPrime(n)){
            return num
            }
        }
    }
    return null
};

//checks to see if the number is a palindrome, not really needed since nextPalindrome pretty much guarantees a palindrome, but used.
function isPalindrome(n){
    if(n.length == 1) return true
    for(let i = 0; i<n/2;i++){
        if(n[i]!=n[n.length-1-i])return false
    }
    return true
}

//checks to see if it is prime, and iterates only up to the square root of the number. If the number is not divisible up to that point, it is a prime number.
function isPrime(num){
    if(num < 2)return false
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num%i == 0)return false
    } 
    return true
}

//takes the first half of the string, adds 1 and then concats the reversed string to that before returning it
//NOTE: prime palindromes can only be an odd number of digits except for 11 which is why the first loop stops at 11. this checks to see if it has an even amount of digits first
// 13 -> 101, 1000 -> 10001, 100000 -> 1000001 etc.
function nextPalindrome(num){
    let str = `${num}`
    if(str.length % 2 ==0 ) return str ="1"+"0".repeat(str.length-1)+"1" //this makes the number the closest palindrome if it is an even number
    let half = `${+str.substr(0,str.length/2+1)+1}`
    let front = half.substr(0,half.length-1)
    return half+[...front].reverse().join("")
}

// Note:

// 1 <= N <= 10^8
// The answer is guaranteed to exist and be less than 2 * 10^8.
