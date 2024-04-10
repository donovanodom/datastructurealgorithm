const divideArray = (nums) => {
  const map = {}
  for(const num of nums){
    if(!map[num]) map[num] = 0
    map[num]++
  }
  let pairs = true
  Object.values(map).forEach((val) => {
    if(val % 2 !== 0) pairs = false
  })
  return pairs
};