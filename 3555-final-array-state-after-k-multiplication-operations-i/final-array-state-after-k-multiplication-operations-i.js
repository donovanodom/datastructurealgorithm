/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
const getFinalState = function(nums, k, multiplier) {
  while(k){
    let min = Math.min(...nums), i = nums.findIndex((x) => x == min)
    nums[i] = min * multiplier
    k--
  }
  return nums
};