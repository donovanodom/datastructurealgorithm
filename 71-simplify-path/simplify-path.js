const simplifyPath = (path) => {
  const stack = [], files = path.split('/')
  for(const file of files){
    if(file == '..'){
      if(stack.length) stack.pop()
    }else if(file && file != '.'){
      stack.push(file)
    }
  }
  return '/' + stack.join('/')
}