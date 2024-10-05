const findPeakElement = (nums) => {
  let l = 0, r = nums.length - 1
  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    if (nums[mid + 1] > nums[mid]) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return l
}