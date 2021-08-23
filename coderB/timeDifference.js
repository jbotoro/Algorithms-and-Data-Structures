// Time Difference

// Have the function TimeDifference(strArr) read the array of strings stored in 
// strArr which will be an unsorted list of times in a twelve-hour format like 
// so: HH:MM(am/pm). Your goal is to determine the smallest difference in minutes
//  between two of the times in the list. For example: if strArr is 
//  ["2:10pm", "1:30pm", "10:30am", "4:42pm"] then your program should return 
//  40 because the smallest difference is between 1:30pm and 2:10pm with a 
//  difference of 40 minutes. The input array will always contain at least two 
//  elements and all of the elements will be in the correct format and unique.

// Examples
// Input: ["1:10pm", "4:40am", "5:00pm"]
// Output: 230
// Input: ["10:00am", "11:45pm", "5:00am", "12:01am"]
// Output: 16

function TimeDifference(strArr) { 

  function getMins(str){
    str=str.split(':')
    if(str[1].match(/[p]/gi) && parseInt(str[0])!==12){
      str[0]=parseInt(str[0])+12
    } else if(str[1].match(/[a]/gi)){
      str[0]=parseInt(str[0])
    } 
    if(str[1][0]==='0' && str[1][1]==='0'){
      str[1]=0
    } else {
      str[1]=parseInt(str[1])
    }
    var mins=(str[0]*60)+str[1]
    return mins
  }
  var arr=[]
  var lowest=Math.abs(getMins(strArr[0])-getMins(strArr[1]))
  
for( var i=0; i<strArr.length; i++){
  for( var j=i+1; j<strArr.length; j++){
    var diff=Math.abs(getMins(strArr[i])-getMins(strArr[j]))
    console.log(lowest, diff)
    
    lowest=Math.min(lowest, diff)
    
  }
}  
   return lowest    
}