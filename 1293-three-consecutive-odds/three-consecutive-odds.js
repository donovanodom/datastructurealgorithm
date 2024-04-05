const threeConsecutiveOdds = function(arr) {
  if(arr.length < 3) return false
  for(let i = 0; i < arr.length - 2; i++){
    if((arr[i] * arr[i+1] * arr[i+2]) % 2 != 0) return true
  }
  return false
};