const minAddToMakeValid = function(s) {
  const stack = []
  for(const char of s){
    if(char == '('){
      stack.unshift('(')
    }else if(char == ')' && stack[0] == '('){
      stack.shift()
    }else if(char == ')'){
      stack.push(')')
    }
  }
  return stack.length
}