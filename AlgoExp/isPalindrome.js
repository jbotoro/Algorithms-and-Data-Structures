function isPalindrome(string) {
  // Write your code here.
	let reversedString = '';
	for(let i = string.length - 1; i >= 0; i--){
		reversedString += string[i]
	}
	return string === reversedString
}