const minNumber = function(nums1, nums2) {
  let min = Infinity
  for(const num of nums1){
    if(nums2.includes(num)) min = Math.min(min, num)
  }
  for(const num of nums2){
    if(nums1.includes(num)) min = Math.min(min, num)
  }
  if(min != Infinity) return min
  nums1.sort((a,b) => a - b)
  nums2.sort((a,b) => a - b)
  const from1 = Number(String(nums1[0]) + String(nums2[0]))
  const from2 = Number(String(nums2[0]) + String(nums1[0]))
  return from1 < from2 ? from1 : from2
};