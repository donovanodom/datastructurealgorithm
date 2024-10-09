const mergeKLists = function(lists) {
  const map = {}
  for(let i = 0; i < lists.length; i++){
    let list = lists[i]
    while(list){
      let num = list.val + 10000
      if(!map[num]) map[num] = 0
      map[num]++
      list = list.next
    }
  }
  const merged = new ListNode()
  let dummy = merged
  Object.keys(map).map((key) => {
    let count = map[key]
    while(count > 0){
      dummy.next = new ListNode(Number(key) - 10000)
      dummy = dummy.next
      count--
    }
  })
  return merged.next
}