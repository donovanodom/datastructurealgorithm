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
const isPalindrome = function(head) {
  let str = '' + head.val
  while(head.next){
    str += head.next.val
    head = head.next
  }
  return str == str.split('').reverse().join('')
};