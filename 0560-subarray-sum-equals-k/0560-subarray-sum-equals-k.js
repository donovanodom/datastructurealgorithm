const subarraySum = function(nums, k) {
  let total = 0
  for(let i = 0; i < nums.length; i++){
    let sum = nums[i]
    if(sum == k) total++
    for(let j = i + 1; j < nums.length; j++){
      sum += nums[j]
      if(sum == k) total++
    }
  }
  return total
}