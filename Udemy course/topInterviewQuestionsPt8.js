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


//#3 Palindrome Linked List

//Given a singly linked list, determine if it is a palindrome.

//Example 1:

//Input: 1 -> 2
//Output: false

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
var isPalindrome = function (head) {
    if (head == null || head.next == null) return true;
    var slow = head;
    var fast = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = reverseList(slow.next);
    slow = slow.next;
    while (slow != null) {
        if (head.val != slow.val) return false;
        head = head.next;
        slow = slow.next;
    }
    return true;
};

var reverseList = function (head) {
    var pre = null;
    var next = null;
    while (head != null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};

//#4 Merge Sorted Array

//Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

//    Note:

//The number of elements initialized in nums1 and nums2 are m and n respectively.
//You may assume that nums1 has enough space(size that is greater or equal to m + n) to hold additional elements from nums2.
//    Example:

//Input:
//nums1 = [1, 2, 3, 0, 0, 0], m = 3
//nums2 = [2, 5, 6], n = 3

//Output: [1, 2, 2, 3, 5, 6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const sortNums = (a, b) => {
    return a - b;
}

var merge = function (nums1, m, nums2, n) {

    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2.shift();
    }
    nums1.sort(sortNums)
};

//#5 Min Stack

//Design a stack that supports push, pop, top, and retrieving the minimum element 
//in constant time.

//push(x)-- Push element x onto stack.
//    pop()-- Removes the element on top of the stack.
//        top()-- Get the top element.
//            getMin()-- Retrieve the minimum element in the stack.


//                Example:

//MinStack minStack = new MinStack();
//minStack.push(-2);
//minStack.push(0);
//minStack.push(-3);
//minStack.getMin(); --> Returns - 3.
//minStack.pop();
//minStack.top(); --> Returns 0.
//minStack.getMin(); --> Returns - 2.

var MinStack = function () {
    this.elements = [];
};

/**

 @param {number} x
 @return {void}
 */
MinStack.prototype.push = function (x) {
    this.elements.push({
        value: x,
        min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
    });
};
/**

 @return {void}
 */
MinStack.prototype.pop = function () {
    this.elements.pop();
};
/**

 @return {number}
 */
MinStack.prototype.top = function () {
    return this.elements[this.elements.length - 1].value;
};
/**

 @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.elements[this.elements.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

