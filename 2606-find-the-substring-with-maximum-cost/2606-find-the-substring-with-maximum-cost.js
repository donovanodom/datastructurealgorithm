const maximumCostSubstring = (s, chars, vals) => {
  const arr = []
  for(const char of s){
    const idx = chars.indexOf(char)
    if(idx >= 0){
      arr.push(vals[idx])
    }else{
      arr.push(char.charCodeAt(0) - 96)
    }
  }
  let curMax = 0, finalMax = 0
  for(const cost of arr){
    curMax = Math.max(0, curMax + cost)
    finalMax = Math.max(finalMax, curMax)
  }
  return finalMax
}