const combinationSum3 = function(k, n) {
  const nums = [1,2,3,4,5,6,7,8,9]
  const res = []
  const makeComb = (comb = [], i = 0, total = 0) => {
    if(total == n && comb.length == k){
      res.push([...comb])
      return
    }
    if(i == nums.length || total > n || comb.length == k){
      return
    }
    makeComb([...comb, nums[i]], i + 1, total + nums[i])
    makeComb(comb, i + 1, total)
  }
  makeComb()
  return res
};