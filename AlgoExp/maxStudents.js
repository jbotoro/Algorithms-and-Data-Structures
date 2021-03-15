// Given a m * n matrix seats  that represent seats distributions in a classroom. If a seat is broken, it is denoted by '#' character otherwise it is denoted by a '.' character.

// Students can see the answers of those sitting next to the left, right, upper left and upper right, but he cannot see the answers of the student sitting directly in front or behind him. Return the maximum number of students that can take the exam together without any cheating being possible..

// Students must be placed in seats in good condition.

 

// Example 1:


// Input: seats = [["#",".","#","#",".","#"],
//                 [".","#","#","#","#","."],
//                 ["#",".","#","#",".","#"]]
// Output: 4
// Explanation: Teacher can place 4 students in available seats so they don't cheat on the exam. 
// Example 2:

// Input: seats = [[".","#"],
//                 ["#","#"],
//                 ["#","."],
//                 ["#","#"],
//                 [".","#"]]
// Output: 3
// Explanation: Place all students in available seats. 

// Example 3:

// Input: seats = [["#",".",".",".","#"],
//                 [".","#",".","#","."],
//                 [".",".","#",".","."],
//                 [".","#",".","#","."],
//                 ["#",".",".",".","#"]]
// Output: 10
// Explanation: Place students in available seats in column 1, 3 and 5.
 

// Constraints:

// seats contains only characters '.' and'#'.
// m == seats.length
// n == seats[i].length
// 1 <= m <= 8
// 1 <= n <= 8

var maxStudents = function(seats) {
    if (!seats.length) return 0;
    
	// precalculate the seat that will be off the matrix
    const lastPos = 1 << seats[0].length;
	// encode the classroom into binary where 1 will be an available seat and 0 will be a broken seat
    const classroom = seats.map((row) => (
        row.reduce((a,c,i) => c === '#' ? a : (a | (1 << i)), 0))
    );
	
	// create a store to store the max seating for each row arrangment
	// each row will be off +1 of seats rows
    const dp = new Array(seats.length + 1).fill(null).map(() => new Map());
	// since no one can sit at row=-1 set the max number of no one sitting on that row as 0
    dp[0].set(0,0);    
	
	// iterate through every row in seats matrix
	// remember that dp's rows are +1 of seats rows
    for (let row = 0; row < seats.length; row++) {
	
	    // start with no one sitting on the row
        let queue = [0];
		// this will count the number of students sitting on this row
		// we will increment this up as we add students to the row
        let numStudents = 0;
		
        while (queue.length > 0) {
            
			// this will store all the different arrangments possible when we add 1 more student from the previous
            const next = [];
			
			// iterate through all the previous arrangements
			// calculate the maximum number of students that can sit on current and all previous rows
			// try adding a student to all possible available seats meeting the rules of the game
            for (let arrangement of queue) {
			
 			    // this calculates the maximum number of students that can sit with this row arrangment
				// if the arrangement doesn't allow any students to sit in the previous row this will be handled
				// by the 0 case in the previous row
				// *see helper function that checks to see if the arrangement conflicts with the previous arrangment
                let max = 0;
                for (let [prevArrang, count] of dp[row]) {
                    if (conflicts(prevArrang, arrangement)) continue;  
                    max = Math.max(max, count + numStudents);
                }
                dp[row + 1].set(arrangement, max);
                
				// try adding an additional student to all elements in the row checking if it conflicts
				// arrangement | i  => adds the student to the arrangement
                for (let i = 1; i < lastPos; i <<= 1) {
                    if (canSit(classroom[row], arrangement, i)) next.push(arrangement | i);
                }
            }            
            
            queue = next;
            numStudents++;
        }
    }
    
	// return the maximum value from the last row
	// the last row holds the maximum number of students for each arrangment
    return Math.max(...dp[seats.length].values());
};

// this checks if the there are any students to the left or right of current arrangment
// curr << 1 => checks if there are any students to the left
// curr >> 1 => check if there are any students to the right
function conflicts(prev, curr) {
    return (prev & (curr << 1)) || (prev & (curr >> 1));
}

// this checks if we can place the new student in this spot
// row & newStudent => checks if the classroom's row's seat is not broken
// arrangment & newStudent => will return truthy if there is a student sitting in that position (so we ! it because we don't want anyone sitting there)
// arrangement & (newStudent << 1) => will return truthy if there is a student sitting to the left of that position (so we ! it because we don't want anyone sitting there)
// arrangement & (newStudent >> 1) => will return truthy if there is a student sitting to the right of that position (so we ! it because we don't want anyone sitting there)
function canSit(row, arrangement, newStudent) {
    return row & newStudent && !(arrangement & newStudent) && !(arrangement & (newStudent << 1)) && !(arrangement & (newStudent >> 1));
}