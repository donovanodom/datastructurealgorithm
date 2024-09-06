const semiOrderedPermutation = function(nums) {
  let i = 0, j = nums.length - 1
  while(nums[i] != 1) i++
  while(nums[j] != nums.length) j--
  if(i < j) return nums.length - 1 - j + i
  return nums.length - 2 - j + i
};