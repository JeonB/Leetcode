/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeInBetween(ListNode list1, int a, int b, ListNode list2) {
        // list1, list2는 각각 0번째 노드임
        ListNode prevAthNode = list1;
        for(int i = 1 ; i<a ; i++){
           prevAthNode = prevAthNode.next;
        }
    
        ListNode bthNode = prevAthNode;
        for(int i = a ; i <= b ; i++ ){
           bthNode = bthNode.next;
        }

        prevAthNode.next = list2;
        while (list2.next != null)
            list2 = list2.next;
        
        list2.next = bthNode.next;

        return list1;
    }
}