const findKthLargest = function(nums, k) {
  const map = {}
  for(const num of nums){
    let key = num + 10000
    if(!map[key]) map[key] = []
    map[key].push(num)
  }
  const arr = Object.values(map).flat()
  return arr[arr.length - k]
}