//#1 Valid Parentheses

//Given a string containing just the characters '(', ')', '{', '}', '[' and ']'
//, determine if the input string is valid.

//An input string is valid if:

//    Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Note that an empty string is also considered valid.

//    Example 1:

//Input: "()"
//Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        switch (c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }

    return stack.length === 0;
};


//#2 Linked List Cycle

//Given a linked list, determine if it has a cycle in it.

//To represent a cycle in the given linked list, we use an integer pos which 
//represents the position(0 - indexed) in the linked list where tail connects 
//to.If pos is - 1, then there is no cycle in the linked list.

//Example 1:

//Input: head = [3, 2, 0, -4], pos = 1
//Output: true
//Explanation: There is a cycle in the linked list, where tail connects to the 
//second node.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    const set = new Set();
    let node = head;
    // return true when node has been visited and saved in the set
    while (node !== null) {
        if (set.has(node)) {
            return true;
        }
        set.add(node);
        node = node.next
    }
    return false;
};



