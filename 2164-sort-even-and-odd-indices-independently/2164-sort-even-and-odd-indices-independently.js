const sortEvenOdd = (nums) => {
  const even = [], odd = []
  for(let i = 0; i < nums.length; i++){
    if(i % 2 == 0){
      even.push(nums[i])
    }else{
      odd.push(nums[i])
    }
  }
  even.sort((a,b) => a - b)
  odd.sort((a,b) => b - a)
  for(let i = 0; i < nums.length; i++){
    if(i % 2 == 0){
      nums[i] = even.shift()
    }else{
      nums[i] = odd.shift()
    }
  }
  return nums
};