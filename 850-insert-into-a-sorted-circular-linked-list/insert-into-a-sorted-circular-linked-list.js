const insert = (head, insertVal) => {
  const newNode = new Node(insertVal)
  if(!head){
    newNode.next = newNode
    return newNode
  }
  let cur = head
  let next = head.next
  while(next != head){
    if((cur.val <= insertVal && next.val >= insertVal) ||
       (cur.val >= insertVal && next.val >= insertVal && next.val < cur.val) ||
       (cur.val <= insertVal && next.val < cur.val)){
      cur.next = newNode
      newNode.next = next
      return head
    }
    cur = next
    next = next.next
  }
  cur.next = newNode
  newNode.next = next
  return head
}
