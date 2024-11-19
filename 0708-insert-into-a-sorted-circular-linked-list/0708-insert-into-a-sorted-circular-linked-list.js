const insert = (head, insertVal) => {
  if(!head){
    const node = new ListNode(insertVal)
    node.next = node
    return node
  } 
  let cur = head, fast = head.next
  while(true){
    if((cur.val <= insertVal && cur.next.val >= insertVal) ||
       (cur.val >= insertVal && cur.next.val >= insertVal && cur.next.val < cur.val) ||
       (cur.val <= insertVal && cur.next.val < cur.val) ||
       cur.next == head
      ){
      const next = cur.next
      cur.next = new ListNode(insertVal)
      cur.next.next = next
      return head
    }
    cur = cur.next
  }
}
