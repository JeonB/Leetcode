/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    let currentNode = head;

    while(currentNode !== null){
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }
    
    for(let i = 0 ; i<arr.length/2 ; i++){
        if(arr[i] !== arr[arr.length - 1 - i]){
            return false;
        }
    }
    return true;
};