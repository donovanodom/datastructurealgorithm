const merge = (nums1, m, nums2, n) => {
  const map = {}, len = nums1.length
  for(let i = 0; i < len - m; i++){
    nums1.pop()
  }
  
  for(const num of nums2){
    let push = num + 1000000000
    if(!map[push]) map[push] = 0
    map[push]++
  }
  const keys = Object.keys(map).map((key) => key - 1000000000)
  let i = 0
  for(const key of keys){
    while(key > nums1[i]) i++
    let arr = Array(map[key + 1000000000]).fill(Number(key)) 
    nums1.splice(i, 0, ...arr)
  }
}