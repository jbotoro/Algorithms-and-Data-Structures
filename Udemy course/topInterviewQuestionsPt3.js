// Reverse a singly linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head.next) {
        return head;
    }

    let first = head
    let second = first.next;

    while (second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }

    head.next = null;
    head = first;

    return head;
};

