const countAsterisks = function(s) {
  let count = 0, pair = false
  for(const char of s){
    if(char == '|'){
      pair = !pair
    } else if (pair == false && char == '*'){
      count++   
    }
  }
  return count
}