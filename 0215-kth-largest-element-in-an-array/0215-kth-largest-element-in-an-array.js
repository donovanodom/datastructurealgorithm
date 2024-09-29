const findKthLargest = function(nums, k) {
  const map = {}
  for(const num of nums){
    let key = num + 10000
    if(!map[key]) map[key] = 0
    map[key]++
  }
  let end = nums.length - k + 1, found = false, ans
  Object.keys(map).map((key) => {
    if(Number(map[key]) >= end && !found){
      ans = Number(key) - 10000
      found = true
    } 
    end -= map[key]
  })
  return ans
}