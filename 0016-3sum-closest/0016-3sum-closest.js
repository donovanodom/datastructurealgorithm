const threeSumClosest = function(nums, target) {
  nums.sort((a,b) => a - b)
  let closest = Infinity
  for(let start = 0; start < nums.length - 2; start++){
    let low = start + 1, high = nums.length - 1
    while(low < high){
      let sum = nums[start] + nums[low] + nums[high]
      let distance = Math.abs(target - sum)
      let current = Math.abs(target - closest)
      if(sum == target){
        return target
      } else if(sum < target){
        if(distance < current) closest = sum
        while(nums[low] == nums[low + 1]) low++
        low++
      } else {
        if(distance < current) closest = sum
        while(nums[high] == nums[high - 1]) high--
        high--
      }
    }
    while(nums[start] == nums[start + 1]) start++
  }
  return closest
};