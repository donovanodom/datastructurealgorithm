const isValid = function(s) {
  const stack = []
  for(const char of s){
    const prev = stack[stack.length - 1]
    if(char == '(' || char == '{' || char == '['){
      stack.push(char)
    }else if(prev == '(' && char == ')' || prev == '{' && char == '}' || prev == '[' && char == ']'){
      stack.pop()
    }else{
      return false
    }
  }
  return !stack.length
}
