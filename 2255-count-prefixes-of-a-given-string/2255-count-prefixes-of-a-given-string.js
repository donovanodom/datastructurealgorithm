const countPrefixes = (words, s) => {
  let count = 0
  for(const word of words){
    if(checkPrefix(word, s)) count++
  }
  return count
}

const checkPrefix = (word, s) => {
  if(word == s.slice(0,word.length)) return true
}