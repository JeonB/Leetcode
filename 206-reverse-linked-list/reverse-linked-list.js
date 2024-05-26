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
   // Base case: if the list is empty or has only one node, return it
    if (head === null || head.next === null) {
        return head;
    }

    // Recursive case: reverse the rest of the list
    let newHead = reverseList(head.next);

    // Make the next node of the current node point to the current node
    head.next.next = head;
    // Set the next node of the current node to null
    head.next = null;

    // Return the new head of the reversed list
    return newHead;
    
};