/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        // ListNode slow_pointer = head, fast_pointer = head;
        // while (fast_pointer != null && fast_pointer.next != null) {
        //     slow_pointer = slow_pointer.next;
        //     fast_pointer = fast_pointer.next.next;
        //     if (slow_pointer == fast_pointer) {
        //         return true;
        //     }
        // }
        // return false;
        HashSet<ListNode> visited_nodes = new HashSet<>();
        ListNode current_node = head;
        while(current_node != null){
            if(visited_nodes.contains(current_node)){
                return true;
            }
            visited_nodes.add(current_node);
            current_node = current_node.next;
        }
        return false;
        
    }
}

