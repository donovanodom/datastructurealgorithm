const minAddToMakeValid = function(s) {
  const open = [], closed = []
  for(const char of s){
    if(char == '('){
      open.push(char)
    }else if(char == ')' && open.length){
      open.pop()
    }else if(char == ')'){
      closed.push(char)
    }
  }
  return open.length + closed.length 
}