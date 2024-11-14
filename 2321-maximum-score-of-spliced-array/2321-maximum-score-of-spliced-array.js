const maximumsSplicedArray = function(nums1, nums2) {
  return Math.max(sumArr(nums2) + kadane(nums1,nums2), sumArr(nums1) + kadane(nums2,nums1))
}

const kadane = (arr1, arr2) => {
  let cur = 0, sum = 0
  for(let i = 0; i < arr1.length; i++){
    cur = Math.max(cur + arr1[i] - arr2[i], arr1[i] - arr2[i])
    sum = Math.max(cur, sum)
  }
  return sum
}

const sumArr = (arr) => {
  let sum = 0
  for(const num of arr){
    sum += num
  }
  return sum
}