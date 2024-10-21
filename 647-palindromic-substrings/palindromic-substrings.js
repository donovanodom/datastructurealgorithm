const countSubstrings = function(s) {
  let count = 0, i = 0
  while(i < s.length){
    count += fromCenter(s, i, i)
    count += fromCenter(s, i, i + 1)
    i++
  }
  return count
}

const fromCenter = (s, i, j) => {
  let count = 0
  while(i >= 0 && j < s.length && s[i] == s[j]){
    count++
    i--
    j++
  }
  return count
}
