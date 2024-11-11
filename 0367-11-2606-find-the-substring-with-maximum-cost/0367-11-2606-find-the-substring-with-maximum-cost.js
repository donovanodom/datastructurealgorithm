const maximumCostSubstring = (s, chars, vals) => {
  
  //initialize arr to hold values for each character
  const arr = []
  
  // traverse characters in string and push their value
  // to arr if in vals array, else get their value using
  // the char code for the character
  for(const char of s){
    const idx = chars.indexOf(char)
    if(idx >= 0){
      arr.push(vals[idx])
    }else{
      arr.push(char.charCodeAt(0) - 96)
    }
  }
  
  // use Kadane's algorithms to find maximum sub value
  let curMax = 0, finalMax = 0
  for(const cost of arr){
    curMax = Math.max(0, curMax + cost)
    finalMax = Math.max(finalMax, curMax)
  }
  return finalMax
}