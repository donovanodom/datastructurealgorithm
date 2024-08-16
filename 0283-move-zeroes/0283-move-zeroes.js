const moveZeroes = function(nums) {
  let zeros = 0
  for(let i = 0; i < nums.length; i++){
    let num = nums[i]
    if(num == 0){
      zeros++
      nums.splice(i,1)
      i--
    } 
  }
  return nums.push(...Array(zeros).fill(0))
};