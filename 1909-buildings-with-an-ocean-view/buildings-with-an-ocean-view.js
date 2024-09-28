/**
 * @param {number[]} heights
 * @return {number[]}
 */
const findBuildings = function(heights) {
  let max = 0, ans = []
  for(let i = heights.length - 1; i >= 0; i--){
    if(heights[i] > max){
      ans.unshift(i)
      max = Math.max(heights[i],max)
    }
  }
  return ans
}