const minAddToMakeValid = function(s) {
  let open = 0, closed = 0
  for(const char of s){
    if(char == ')' && open){
      open--
    }else if(char == ')'){
      closed++
    }else{
      open++
    }
  }
  return open + closed
}