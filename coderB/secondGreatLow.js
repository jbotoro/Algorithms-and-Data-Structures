// Second GreatLow
// Have the function SecondGreatLow(arr) take the array of numbers stored in arr 
//and return the second lowest and second greatest numbers, respectively, 
//separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the 
//output should be 12 98. The array will not be empty and will contain at least 
//2 numbers. It can get tricky if there's just two numbers!

// Examples
// Input: [1, 42, 42, 180]
// Output: 42 42
// Input: [4, 90]
// Output: 90 4


0
function SecondGreatLow(arr) { 
    var unique = arr.filter(function(elem, index, self) {
        return self.indexOf(elem) === index;
    });

    var sorted = unique.sort(function(a, b) {
        return a - b;
    });

    if (sorted.length < 2) { 
        return sorted[0] + " " + sorted[0]; 
    } else {
        return sorted[1] + " " + sorted[sorted.length - 2];
    }
}