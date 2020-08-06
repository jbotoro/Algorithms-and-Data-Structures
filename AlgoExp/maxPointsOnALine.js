// Given n points on a 2D plane, find the maximum number of points that lie on 
//the same straight line.

// Example 1:

// Input: [[1,1],[2,2],[3,3]]
// Output: 3
// Explanation:
// ^
// |
// |        o
// |     o
// |  o  
// +------------->
// 0  1  2  3  4
// Example 2:

// Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4
// Explanation:
// ^
// |
// |  o
// |     o        o
// |        o
// |  o        o
// +------------------->
// 0  1  2  3  4  5  6
// NOTE: input types have been changed on April 15, 2019. Please reset to 
//default code definition to get new method signature.

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length <2|| points == null) return points.length;
    let max = 2;
    for (let i=0;i<points.length;i++) {
        let [p1x, p1y] = points[i];
        let samePoint = 1, map = {'base':0}; // to avoid when map = {}, the max value is -Infinity
        for (let j=i+1;j<points.length;j++) {
            if (points[i][0] == points[j][0] && points[i][1] == points[j][1]) {
                samePoint++;
            } else {
                let [p2x, p2y] = points[j];
                let slope = 1000000.0 * (p2y - p1y)/(p2x - p1x);
                if (!Number.isFinite(slope)) slope = "v";
                else if (Number.isNaN(slope)) slope = "h";
                map[slope] = map[slope]+1||1;
            }   
        }
        max = Math.max(Math.max(...Object.values(map))+samePoint, max);
    }
    return max;
};