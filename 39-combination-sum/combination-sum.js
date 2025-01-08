const combinationSum = function(candidates, target) {
  const res = []
  const makeComb = (comb = [], i = 0, total = 0) => {
    if(total == target){
      res.push([...comb])
      return
    }
    if(i == candidates.length || total > target){
      return
    }
    makeComb([...comb, candidates[i]], i, total + candidates[i])
    makeComb(comb, i + 1, total)
  }
  makeComb()
  return res
};