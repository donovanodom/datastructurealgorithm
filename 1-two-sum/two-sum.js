const twoSum = function(nums, target) {
  const visited = new Map()
  for(let i = 0; i < nums.length; i++){
    let num = nums[i], diff = target - num
    if(visited.has(diff)) return [visited.get(diff),i]
    visited.set(num, i) 
  }
};