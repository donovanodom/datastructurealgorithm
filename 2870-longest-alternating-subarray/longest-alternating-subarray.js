const alternatingSubarray = (nums) => {
  let i = 1, count = 0, neg = -1, max = 0
  while(i < nums.length){
    const dif = nums[i] - nums[i - 1]
    if(Math.abs(dif) == 1){
      if(dif != neg){
        i++
        count++
        neg = dif
      }else if(count == 0){
        i++
      }else{
        count = 0
        neg = -1
      }
      max = Math.max(count, max)
    }else{
      count = 0
      neg = -1
      i++
    }
  }
  return max == 0 ? -1 : max + 1
}