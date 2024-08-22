const maxUniqueSplit = function(s, seen = []) {
  let max = 0
  for(let i = 0; i < s.length; i++){
    let str = s.slice(0, i + 1)
    if(seen.includes(str)) continue
    seen.push(str)
    max = Math.max(max, 1 + maxUniqueSplit(s.slice(i + 1), seen))
    seen.pop()
  }
  return max
};