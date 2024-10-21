const countSubstrings = function(s) {
  
  // initialize count to zero and iterate through
  // s for each char in s run the helper function
  // to count out from the center to find palidromes
  // since some palidromes count have an odd number
  // making the middle character inconsequential,
  // start at both i & i and i & i + 1 for even lengths
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
