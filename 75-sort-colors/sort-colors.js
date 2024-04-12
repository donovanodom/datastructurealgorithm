const sortColors = (nums) => {
  const map = {}
  for(const num of nums){
    if(!map[num]) map[num] = 0
    map[num]++
  }
  let color = 0
  for(let i = 0; i < nums.length; i++){
    while(!map[color]) color++
    nums[i] = color
    map[color]--
  }
};