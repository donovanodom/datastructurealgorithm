const countPrefixes = (words, s) => {
  let count = 0
  for(const word of words){
    if(checkPrefix(word, s)) count++
  }
  return count
}

const checkPrefix = (word, s) => {
  const sub = s.slice(0,word.length)
  if(word == sub) return true
}