const findIntersectionValues = (nums1, nums2) => {
  let ans = [0,0]
  for(const num of nums1){
    if(isInArr(num, nums2)){
      ans[0]++
    }
  }
  for(const num of nums2){
    if(isInArr(num, nums1)){
      ans[1]++
    }
  }
  return ans
};

const isInArr = (num, arr) => {
  return arr.includes(num)
}
