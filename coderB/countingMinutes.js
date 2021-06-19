// Counting Minutes
// Have the function CountingMinutes(str) take the str parameter being passed 
//which will be two times (each properly formatted with a colon and am or pm) 
//separated by a hyphen and return the total number of minutes between the two 
//times. The time will be in a 12 hour clock format. For example: if str is 
//9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the 
//output should be 1320.

// Examples
// Input: "12:30pm-12:00am"
// Output: 690
// Input: "1:23am-1:08am"
// Output: 1425

function CountingMinutes(str) { 
    var val = toMinutes(str.split("-")[1]) - toMinutes(str.split("-")[0]);
    if (val < 0) {
        val = toMinutes("12:00pm")-Math.abs(val);
    }
    return val;
}
function toMinutes(str) {
    var hrs = parseFloat(str.split(":")[0]);
    var mins = parseFloat(str.split(":")[1].replace(/\D/g, ""));
    if (str.indexOf("pm")!== -1) {
        hrs += 12;
    }
    return (parseFloat(hrs) * 60) + parseFloat(mins);
}  