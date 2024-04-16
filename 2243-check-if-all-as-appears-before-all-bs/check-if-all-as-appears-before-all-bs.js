const checkString = function(s) {
  let seenA = false, seenB = false
  for(const char of s){
    if(char == 'a'){
      if(seenB == true) return false
      seenA = true
    }
    if(char == 'b'){
      seenB = true
    }
  }
  return true
};