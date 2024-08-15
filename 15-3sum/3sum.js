const threeSum = function(nums) {
  nums.sort((a,b) => a - b)
  const res = []
  for(let start = 0; start < nums.length; start++){
    let low = start + 1, high = nums.length - 1
    while(low < high){
      let sum = nums[start] + nums[low] + nums[high]
      if(sum == 0){
        res.push([nums[start], nums[low], nums[high]])
        while(nums[low] == nums[low + 1]) low++
        while(nums[high] == nums[high - 1]) high--
        low++
        high--
      } else if(sum < 0) {
        low++
      } else {
        high--
      }
    }
    while(nums[start] == nums[start + 1]) start++
  }
  return res
}