/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
   if (head === null) {
        return null;
    }

    // Recursive call: process the rest of the list
    head.next = removeElements(head.next, val);

    // If the current node needs to be removed, skip it by returning the next node
    if (head.val === val) {
        return head.next;
    } else {
        // Otherwise, return the current node
        return head;
    }
};