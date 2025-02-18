const romanToInt = function(s) {
  const roman = ['I','V','X','L','C','D','M']
  const number = [1,5,10,50,100,500,1000]
  let i = 0, res = 0
  while(i < s.length){
    const left = roman.indexOf(s[i]), right = roman.indexOf(s[i + 1])
    if(right && number[left] < number[right]){
      res -= number[left]
    }else {
      res += number[left]
    }
    i++
  }
  return res
};