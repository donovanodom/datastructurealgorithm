/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {
  const ans = []
  if(nums.length < 4) return ans
  nums.sort((a,b) => a - b)
  for(let first = 0; first < nums.length - 3; first++){
    for(let second = first + 1; second < nums.length - 2; second++){
      let third = second + 1, fourth = nums.length - 1
      while(third < fourth){
        let sum = nums[first] + nums[second] + nums[third] + nums[fourth]
        if(sum == target){
          ans.push([nums[first], nums[second], nums[third], nums[fourth]])
          while(nums[third] == nums[third + 1]) third++
          while(nums[fourth] == nums[fourth - 1]) fourth--
          third++
          fourth--
        } else if(sum < target) {
          while(nums[third] == nums[third + 1]) third++
          third++
        } else{
          while(nums[fourth] == nums[fourth - 1]) fourth--
          fourth--
        }
      }
      while(nums[second] == nums[second + 1]) second++
    }
    while(nums[first] == nums[first + 1]) first++
  }
  return ans
};