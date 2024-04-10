const intersection = (nums) => {
  const map = {}
  for(const arr of nums){
    for(const num of arr){
      if(!map[num]) map[num] = 0
      map[num]++
    }
  }
  return Object.keys(map).reduce((acc, cur) =>{
    if(map[cur] == nums.length) acc.push(cur)
    return acc
  }, [])
};