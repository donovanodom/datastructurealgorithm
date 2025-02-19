const searchInsert = function(nums, target) {
  let l = 0, r = nums.length - 1
  while(l <= r){
    let mid = Math.floor((l + r) / 2)
    const cur = nums[mid]
    if(cur == target){
      return mid
    }else if (cur < target){
      l = mid + 1
    }else {
      r = mid - 1
    }
  }
  return l
};