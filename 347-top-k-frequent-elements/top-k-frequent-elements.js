const topKFrequent = function(nums, k) {
  
  // initialize a map to hold the count and num values
  // for each num, create an array that holds [count,num]
  // and increment the count whenever num is encountered
  const map = {}
  for(const num of nums){
    if(!map[num]) map[num] = [0,num]
    map[num][0]++
  }
  
  // convert map to an array and sort from high to low count
  const dp = Object.values(map).map((val) => val)
  dp.sort((a,b) => b[0] - a[0])
  
  // return the num value for the first k elements 
  return dp.slice(0,k).map(([_,num]) => num)
}