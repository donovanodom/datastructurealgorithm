const twoEditWords = (queries, dictionary) => {
  const res = []
  for(const query of queries){
    for(const word of dictionary){
      if(checkMatch(query, word)){
        res.push(query)
        break
      }
    }
  }
  return res 
}

const checkMatch = (query, word) => {
  let diff = 0
  for(let i = 0; i < query.length; i++){
    if(query[i] != word[i]) diff++
    if(diff > 2) return false
  }
  return true
}