const twoSum = function(nums, target) {
  const map = {}
  for(let i = 0; i < nums.length; i++){
    const diff = target - nums[i]
    if(map.hasOwnProperty(diff)) return [i,map[diff]]
    map[nums[i]] = i
  }
};