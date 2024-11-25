const Solution = function(nums) {
  const map = {}
  for(let i = 0; i < nums.length; i++){
    const num = nums[i]
    if(!map[num]) map[num] = []
    map[num].push(i)
  }
  this.map = map
}

Solution.prototype.pick = function(target) {
  const map = this.map, len = map[target].length
  return map[target][Math.floor(Math.random() * len)]
}
