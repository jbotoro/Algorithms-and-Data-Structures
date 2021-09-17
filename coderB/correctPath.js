// Correct Path

// Have the function CorrectPath(str) read the str parameter being passed, which 
// will represent the movements made in a 5x5 grid of cells starting from the top 
// left position. The characters in the input string will be entirely composed of:
//  r, l, u, d, ?. Each of the characters stand for the direction to take within 
//  the grid, for example: r = right, l = left, u = up, d = down. Your goal is to 
//  determine what characters the question marks should be in order for a path to 
//  be created to go from the top left of the grid all the way to the bottom right 
//  without touching previously travelled on cells in the grid.

// For example: if str is "r?d?drdd" then your program should output the final 
// correct string that will allow a path to be formed from the top left of a
//  5x5 grid to the bottom right. For this input, your program should therefore 
//  return the string rrdrdrdd. There will only ever be one correct path and 
//  there will always be at least one question mark within the input string.

// Examples
// Input: "???rrurdr?"
// Output: dddrrurdrd
// Input: "drdr??rrddd?"
// Output: drdruurrdddd



function CorrectPath(str) {
    let paths = [""];
    for (let i = 0; i < str.length; i++) {
        const dirs = ["u", "d", "l", "r"];
        if (str[i] === "?") {
        const newPaths = [];
        paths.forEach(path => dirs.forEach(dir => newPaths.push(path + dir)));
        paths = newPaths;
        }
    }
    pathcheck: for (path of paths) {
        let j = 0,
        x = 0,
        y = 0;
        for (let i = 0; i < str.length; i++) {
        let dir = str[i];
        if (dir === "?") {
            dir = path[j];
            j++;
        }
        if (dir === "u") {
            y--;
        } else if (dir === "d") {
            y++;
        } else if (dir === "l") {
            x--;
        } else if (dir === "r") {
            x++;
        }
        if (x < 0 || x > 4 || y < 0 || y > 4) {
            continue pathcheck;
        }
        }
        if (x === 4 && y === 4) {
        j = 0;
        let correctPath = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "?") {
            correctPath += path[j];
            j++;
            } else {
            correctPath += str[i];
            }
        }
        return correctPath;
        }
    }
    return "not possible";
}
