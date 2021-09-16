// Overlapping Rectangles

// Have the function OverlappingRectangles(strArr) read the strArr parameter being
//  passed which will represent two rectangles on a Cartesian coordinate plane and
//   will contain 8 coordinates with the first 4 making up rectangle 1 and the 
//   last 4 making up rectange 2. It will be in the following format: [
//       "(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"
//     ] 
// Your program should determine the area of the space where the two rectangles 
// overlap, and then output the number of times this overlapping region can fit 
// into the first rectangle. For the above example, the overlapping region makes 
// up a rectangle of area 2, and the first rectangle (the first 4 coordinates) 
// makes up a rectangle of area 4, so your program should output 2. The 
// coordinates will all be integers. If there's no overlap between the two 
//rectangles return 0.

// Examples
// Input: ["(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)"]
// Output: 6
// Input: ["(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)"]
// Output: 3


0
function OverlappingRectangles(strArr) { 

    let coordinates = strArr[0].split('),(');
// return coordinates
    coordinates[0] = coordinates[0].replace('(', '');
    coordinates[7] = coordinates[7].replace(')', '');
    coordinates = coordinates.map(function(el){
        return el.split(',').map(Number);
    });
  //return coordinates; 
    let r1 = coordinates.slice(0, 4).sort(function(a, b){
        return (a[0] + a[1]) - (b[0] + b[1]);
    })
    let r2 = coordinates.slice(4).sort(function(a, b){
        return (a[0] + a[1]) - (b[0] + b[1]);
    })
  //return r2
    let top1 = r1[3][1],
        bottom1 = r1[0][1],
        left1 = r1[0][0],
        right1 = r1[3][0],
        
    area1 = (top1 - bottom1) * (right1 - left1);
    //return left1
    let top2 = r2[3][1],
        bottom2 = r2[0][1],
        left2 = r2[0][0],
        right2 = r2[3][0];
    let overlapTop = Math.min(top1, top2),
        overlapBottom = Math.max(bottom1, bottom2),
        overlapRight = Math.min(right1, right2),
        overlapLeft = Math.max(left1, left2);
        overlapArea = (overlapTop - overlapBottom) * (overlapRight - overlapLeft);
        
    if(overlapTop < overlapBottom || overlapRight < overlapLeft || overlapArea === 0){
        return 0
    }
    return Math.floor(area1/overlapArea);
}