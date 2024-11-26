const maxSubArray = function(nums) {
  let max = -Infinity, cur = 0
  for(const num of nums){
    cur = Math.max(cur + num, num)
    max = Math.max(max, cur)
  }
  return max
}