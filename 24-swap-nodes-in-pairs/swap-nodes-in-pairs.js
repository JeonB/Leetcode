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

var swapPairs = function(head) {
    if(!head || !head.next) return head;
    const node1 = head, node2 = head.next, node3 = node2.next;
    node2.next = node1;
    node1.next = swapPairs(node3);
    return node2;
};