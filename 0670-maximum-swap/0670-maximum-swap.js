const maximumSwap = function(num) {
  const arr = String(num).split('')
  const dp = Array(9).fill(-1)
  for(let i = 0; i < arr.length; i++){
    dp[arr[i]] = i
  }
  for(let i = 0; i < arr.length; i++){
    for(let j = 9; j > arr[i]; j--){
      if(dp[j] > i){
        [arr[i], arr[dp[j]]] = [arr[dp[j]], arr[i]]
        return Number(arr.join(''))
      }
    }
  }
  return num
}