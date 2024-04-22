const isPalindrome = (s) => {
  let l = 0, r = s.length -  1
  while(l < r){
    if(s[l] != s[r]) return false
    l++
    r--
  }
  return true
}

const iterate = (s,sub,res) => {
  if(s.length == 0){
    res.push(sub)
    return
  }
  for(let i = 1; i < s.length + 1; i++){
    let val = s.slice(0,i)
    if(isPalindrome(val)){
      iterate(s.slice(i),[...sub,val],res)
    }
  }
  return res
}

const partition = (s) => {
  return iterate(s,[],[])
};
