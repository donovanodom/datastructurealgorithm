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
const hasCycle = function(head) {
  let slow = head, fast = head
  while(fast && fast.next){
    fast = fast.next.next
    slow = slow.next
    if(slow == fast) return true
  }
  return false
};