/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        HashSet<ListNode> nodeA = new HashSet<>();
        ListNode currentA = headA;
        ListNode currentB = headB;
        while(currentA != null){
            nodeA.add(currentA);
            currentA = currentA.next;
        }
        while(currentB != null){
            if(nodeA.contains(currentB)){
                return currentB;
            }
            currentB = currentB.next;
        }

        return null;
    }
}