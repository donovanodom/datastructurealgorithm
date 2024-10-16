const kthSmallest = (matrix, k) => {
  const map = {}
  for(const row of matrix){
    for(const num of row){
      const refNum = num + 1000000000
      if(!map[refNum]) map[refNum] = 0
      map[refNum]++
    }
  }
  let ans
  Object.keys(map).forEach((key) => {
    while(map[key] && k > 0){
      map[key]--
      k--
    }
    if(k == 0){
      ans = Number(key) - 1000000000
      k--
    } 
  })
  return ans
}