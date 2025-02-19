const removeDuplicates = function(nums) {
  for(let i = 1; i < nums.length; i++){
    let j = i
    while(nums[j] == nums[i - 1]){
      j++
    }
    nums.splice(i, j - i)
  }
  return nums.length
};