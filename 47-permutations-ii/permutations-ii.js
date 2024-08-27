const permuteUnique = function(nums) {
  const ans = [], seen = new Set()
  const dfs = (i, nums) => {
    if(i == nums.length){
      const str = nums.slice().join(':')
      if(!seen.has(str)){
        seen.add(str)
        ans.push(nums.slice())
      }
      return
    }
    for(let j = i; j < nums.length; j++){
      const a = nums[i]
      nums[i] = nums[j]
      nums[j] = a
      dfs(i + 1, nums)
      const b = nums[i]
      nums[i] = nums[j]
      nums[j] = b
    }
  }
  dfs(0,nums)
  return ans
};