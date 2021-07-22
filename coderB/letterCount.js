// Letter Count

// Have the function LetterCount(str) take the str parameter being passed and 
// return the first word with the greatest number of repeated letters. For 
// example: "Today, is the greatest day ever!" should return greatest because it 
// has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there 
// are no words with repeating letters return -1. Words will be separated by 
// spaces.

// Examples
// Input: "Hello apple pie"
// Output: Hello
// Input: "No words"
// Output: -1



function LetterCount(str) { 

    var letMap = {};
    var words = str.split(' ');
    var maxCount = 0;
    
    for(var i = 0; i < words.length; i++){
        var letMap = {};

        for(var j = 0; j < words[i].length; j++){
            letMap[words[i][j]] = letMap[words[i][j]] + 1 || 1;
            if(letMap[words[i][j]] > maxCount){
                maxCount = letMap[words[i][j]];
                var maxWord = words[i];
            }
        }
    }
    
    if(maxCount === 1) return -1
    return maxWord;
         
}