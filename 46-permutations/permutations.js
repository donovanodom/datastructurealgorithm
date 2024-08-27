const permute = function(nums) {
  const ans = []
  const dfs = (i, nums) => {
    if(i == nums.length){
      ans.push([...nums])
      return
    }
    for(let j = i; j < nums.length; j++){
      [nums[i], nums[j]] = [nums[j], nums[i]]
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }
  dfs(0, nums)
  return ans
};