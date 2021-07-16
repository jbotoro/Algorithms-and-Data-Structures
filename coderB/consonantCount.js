// Consonant Count

// Have the function ConsonantCount(str) take the str string parameter being 
// passed and return the number of consonants the string contains.

// Examples
// Input: "Hello World"
// Output: 7
// Input: "Alphabets"
// Output: 6

function ConsonantCount(str) { 

  // code goes here  
  let count = 0;
  let arr = str.split('');
  let test = ['a','e','i','o','u',' ']

  for(let i = 0; i < arr.length; i++){
    let curr = arr[i].toLowerCase();

    if( !test.includes(curr) ){
      count++;
    }
  }


  return count; 

  

}