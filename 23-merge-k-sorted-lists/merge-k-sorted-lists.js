const mergeKLists = function(lists) {
  
  // initialize an object to hold values and their counts
  // the object will inherently hold the keys as sorted
  const map = {}
  
  // iterate each list and increment its value in map
  for(let i = 0; i < lists.length; i++){
    let list = lists[i]
    while(list){
      let num = list.val + 10000
      if(!map[num]) map[num] = 0
      map[num]++
      list = list.next
    }
  }
  
  // initialize our merged list and let dummmy equal merged
  const merged = new ListNode()
  let dummy = merged
  
  // map through our keys and add the key as a number to the
  // merged list while decrementing the value in map
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