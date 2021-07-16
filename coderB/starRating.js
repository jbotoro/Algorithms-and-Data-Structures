// Star Rating
// Have the function StarRating(str) take the str parameter being passed which 
// will be an average rating between 0.00 and 5.00, and convert this rating into 
// a list of 5 image names to be displayed in a user interface to represent the 
// rating as a list of stars and half stars. Ratings should be rounded to the 
// nearest half. There are 3 image file names available: 
// "full.jpg", "half.jpg", "empty.jpg". The output will be the name of the 5 
// images (without the extension), from left to right, separated by spaces. 
// For example: if str is "2.36" then this should be displayed by the following 
// image:



// So your program should return the string "full full half empty empty".
// Examples
// Input: "0.38"
// Output: half empty empty empty empty
// Input: "4.5"
// Output: full full full full half

function StarRating(str) { 

  // split string into whole number and decimal
  let arr = str.split('.');
 

  let whole = arr[0];
  //capture decimal and use to calculate the half
  let decimal = Number("0." + arr[1]);
  let half = 0;
  let empty = 0;
  
  if(decimal < .25){
    half = 0;
  } else if (decimal >= .75){
    whole++;
  } else {
    half = 1
  }
  // calculate number of emptys by subtracting whole and half from 5
  empty = 5 - whole - half;

  // use .repeat method to repeat the correct # of times easily

  return `${"full ".repeat(whole) + "half ".repeat(half) + "empty ".repeat(empty)}`.trim();

  

  

  
 

}