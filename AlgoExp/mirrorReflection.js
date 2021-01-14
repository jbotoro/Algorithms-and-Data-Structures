// There is a special square room with mirrors on each of the four walls.  Except for the southwest corner, there are receptors on each of the remaining corners, numbered 0, 1, and 2.

// The square room has walls of length p, and a laser ray from the southwest corner first meets the east wall at a distance q from the 0th receptor.

// Return the number of the receptor that the ray meets first.  (It is guaranteed that the ray will meet a receptor eventually.)

 

// Example 1:

// Input: p = 2, q = 1
// Output: 2
// Explanation: The ray meets receptor 2 the first time it gets reflected back to the left wall.

// Note:

// 1 <= p <= 1000
// 0 <= q <= p

var mirrorReflection = function(p, q) {
        var step = p-q;
        var carry = 0;
        var pos = 0;
        var turn = 0;
        while(true){
            if(turn == 0) pos+= step;
            if(turn == 1) pos-= step;
            carry++;
            if(pos > p){
                pos = p-(pos-p);
                turn = 1;
            }
            if(pos < 0){
                pos *=-1;
                turn =0;
            }
            if(pos == 0){
                return carry%2==0?2:1;
            }
            if(pos == p && carry %2==1)return 0;
        }
};


// The idea is reach p or 0 so we are moving only in y plane.
// if we reach p and if we are in right wall we can return 0

// but if we reach 0 den we can return 1 or 2 if we are in left wall 2 else 1

// if we reach p but not the corner we willl change turn and keep moving same thing for 0 too