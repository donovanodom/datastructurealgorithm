const insertGreatestCommonDivisors = function(head) {
  let dummy = head
  while(dummy.next){
    const next = dummy.next
    dummy.next = new ListNode(gcd(dummy.val, dummy.next.val))
    dummy = dummy.next
    dummy.next = next
    dummy = dummy.next
  }
  return head
}

const gcd = (a, b) => {
  if (b == 0) {
    return a
  }
  return gcd(b, a % b)
}