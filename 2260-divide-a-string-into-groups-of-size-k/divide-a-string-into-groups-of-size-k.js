const divideString = (s, k, fill) => {
    if(k == 1) return s.split('')
    let ans = [],  sub = ''
    const count = k
    for(let i = 0; i < s.length; i++){
      if(k == 0){
        ans.push(sub)
        sub = ''
        k = count
      }
      if(i === s.length - 1){
        sub += s[i]
        k--
        sub += fill.repeat(k)
        ans.push(sub)
      }
      sub += s[i]
      k--
    }
  return ans
};