const isArraySpecial = function(nums, queries) {
  const dp = Array(nums.length).fill(0)
  let pass = 0
  for(let i = 1; i < nums.length; i++){
    if(nums[i] % 2 != nums[i - 1] % 2){
      dp[i] = pass
    }else{
      pass = i
      dp[i] = pass
    }
  }
  const res = []
  for(const q of queries){
    if(q[0] >= dp[q[1]]){
      res.push(true)
    }else{
      res.push(false)
    }
  }
  return res
}

