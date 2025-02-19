const plusOne = function(digits) {
  let i = digits.length - 1
  while(i >= 0){
    if(digits[i] == 9){
      digits[i] = 0
      if(!digits[i - 1]){
        return [1, ...digits]
      }
    }else{
      digits[i]++
      return digits
    }
    i--
  }
};