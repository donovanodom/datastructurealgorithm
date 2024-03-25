function lengthOfLastWord(s: string): number {
    let l = 0, m = 0, r = s.length - 1
    while(s[r] === ' ') r--
    while(l <= r){
      if(s[l] !== ' '){
        while(s[m] !== ' '){
          if(m === r) return r - l + 1
          m++
        }
        l = m
      } else {
        l++
        m++
      }
    }
};