const returnToBoundaryCount = function(nums) {
  let pos = 0, count = 0
  for(const num of nums){
    pos += num
    if(pos == 0) count++
  }
  return count
}