const topKFrequent = function(nums, k) {
  const map = {}
  for(const num of nums){
    if(!map[num]) map[num] = [0,num]
    map[num][0]++
  }
  const dp = Object.values(map).map((val) => val)
  dp.sort((a,b) => b[0] - a[0])
  const res = []
  let i = 0
  while(i < dp.length && k){
    if(dp[i]){
      res.push(dp[i][1])
      k--
    }
    i++
  }
  return res
}