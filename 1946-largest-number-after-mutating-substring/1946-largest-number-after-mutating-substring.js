const maximumNumber = function(num, change) {
  let hasChanges = false, i = 0
  while(i < num.length){
    while(i < num.length && change[Number(num[i])] >= num[i]){      
      if(change[Number(num[i])] > num[i]){
        num = num.slice(0,i) + change[Number(num[i])] + num.slice(i + 1)
        hasChanges = true
      } 
      i++
    }
    if(hasChanges) break
    i++
  }
  return num
}