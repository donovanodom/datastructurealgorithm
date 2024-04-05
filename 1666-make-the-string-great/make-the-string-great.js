const makeGood = (s) => {
  let i = 0
  while(i < s.length - 1){
    if(s[i] != s[i+1] && s[i].toUpperCase() == s[i+1].toUpperCase()){
      s = s.slice(0,i) + s.slice(i+2)
      i = 0
    }else{
      i++
    }
  }
  return s
};