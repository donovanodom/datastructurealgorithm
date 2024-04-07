const sumOfEncryptedInt = function(nums) {
  let sum = 0
  for(const num of nums){
    sum += encrypt(num)
  }
  return sum
}

const encrypt = (nums) => {
  let max = 0, len = 0
  for(const num of String(nums)){
    len++
    max = Math.max(Number(num), max)
  }
  return Number(String(max).repeat(len))
}