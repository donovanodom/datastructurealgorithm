const romanToInt = function(s) {
  const roman = ['I','V','X','L','C','D','M']
  const number = [1,5,10,50,100,500,1000]
  let c = 0, ans = 0
  while(c < s.length){
    let l = roman.indexOf(s[c]), r = roman.indexOf(s[c+1])
    if(r && number[l] < number[r]){
      ans -= number[l]
    }else{
      ans += number[l]
    }
    c++
  }
  return ans
};