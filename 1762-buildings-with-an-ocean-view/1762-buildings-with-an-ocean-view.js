const findBuildings = function(heights) {
  let max = 0, res = []
  for(let i = heights.length - 1; i >= 0; i--){
    if(heights[i] > max){
      res.unshift(i)
      max = heights[i]
    }
  }
  return res
}