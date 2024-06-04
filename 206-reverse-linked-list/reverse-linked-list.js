/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let nextTemp = curr.next; // Store the next node
        curr.next = prev;         // Reverse the link
        prev = curr;              // Move prev one step forward
        curr = nextTemp;          // Move curr one step forward
    }
    return prev;  // prev will be the new head at the end of the loop
};