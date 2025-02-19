const removeDuplicates = function(nums) {
  for(let i = 1; i < nums.length; i++){
    while(nums[i] == nums[i - 1]){
      nums.splice(i, 1)
    }
  }
  return nums.length
};