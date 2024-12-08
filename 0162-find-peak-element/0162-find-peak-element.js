const findPeakElement = (nums) => {
  let prev = -Infinity
  for(let i = 0; i < nums.length - 1; i++){
    if(nums[i] > nums[i + 1] && nums[i] > prev){
      return i
    }else{
      prev = nums[i]
    }
  }
  return nums.length - 1
}

// const findPeakElement = (nums) => {
//   let l = 0, r = nums.length - 1
//   while(l < r){
//     let mid = Math.floor((l + r) / 2)
//     if(nums[mid + 1] > nums[mid]){
//       l = mid + 1
//     }else{
//       r = mid
//     }
//   }
//   return l
// }