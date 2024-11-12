const maximumNumber = function(num, change) {
  let hasChanges = false, i = 0, start, end, diff = ''
  while(i < num.length){
    while(i < num.length && change[Number(num[i])] >= num[i]){      
      if(change[Number(num[i])] > num[i]){
        diff += change[Number(num[i])]
        if(!hasChanges) start = i
        hasChanges = true
      }else if(hasChanges){
        diff += num[i]
      } 
      i++
    }
    if(hasChanges){
      end = i
      break
    } 
    i++
  }
  return hasChanges ? num.slice(0,start) + diff + num.slice(end) : num
}