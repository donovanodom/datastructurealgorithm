const permuteUnique = function(nums) {
  const seen = []
  const permute = function(nums, i = 0, ans = []) {
    if(i == nums.length){
      const str = nums.join(':')
      if(!seen.includes(str)){
        seen.push(str)
        ans.push([...nums])
      }
      return
    }
    for(let j = i; j < nums.length; j++){
      [nums[i], nums[j]] = [nums[j], nums[i]];
      permute(nums, i + 1, ans);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    return ans
  }
  return permute(nums)
}