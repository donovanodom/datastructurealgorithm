const simplifyPath = (path) => {
  const stack = [], arr = path.split('/')
  for(const el of arr){
    if(el == '..'){
      stack.pop()
    }else if(el == '.'){
      continue
    }else if(el){
      stack.push(el)
    }
  }
  return '/' + stack.join('/')
}