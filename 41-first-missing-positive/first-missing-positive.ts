function firstMissingPositive(nums: number[]): number {
    let pos = 1, i = 0, set = new Set(nums)
    while(i < nums.length){
      if(set.has(pos)){
        pos++
      }else{
        return pos
      }  
      i++
    }
  return pos
};