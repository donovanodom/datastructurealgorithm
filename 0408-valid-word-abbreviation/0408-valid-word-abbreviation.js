const validWordAbbreviation = function(word, abbr) {
  let i = 0, j = 0
  while(i < word.length){
    if(word[i] == abbr[j]){
      i++
      j++
    }else if(!isNaN(abbr[j])){
      if(abbr[j] == 0) return false
      let num = ''
      while(!isNaN(abbr[j])){
        num += abbr[j]
        j++
      }
      i += Number(num)
      if(i > word.length) return false
    }else{
      return false
    }
  }
  return j == abbr.length
}