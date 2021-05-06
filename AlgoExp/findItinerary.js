// You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

// All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

 

// Example 1:


// Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// Output: ["JFK","MUC","LHR","SFO","SJC"]
// Example 2:


// Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.
 

// Constraints:

// 1 <= tickets.length <= 300
// tickets[i].length == 2
// fromi.length == 3
// toi.length == 3
// fromi and toi consist of uppercase English letters.
// fromi != toi

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    tickets.sort()
    let hash = {};
    for (let ticket of tickets) {
        if (!hash[ticket[0]]) hash[ticket[0]] = []; // "from" key
        if (!hash[ticket[1]]) hash[ticket[1]] = []; // "to" key
        hash[ticket[0]].push(ticket[1]);
    }

    let res = [];
    let dfs = function(from, itinerary) {
        if (itinerary.length == tickets.length + 1) {
            res = itinerary;
            return true;
        }
        let len = hash[from].length;
        for (let i=0;i<len;i++) {
            let to = hash[from].shift();
            if (dfs(to, [...itinerary, to])) return itinerary;
            hash[from].push(to);
        }
        return false
    }

    dfs("JFK", ["JFK"]);
    return res;
};