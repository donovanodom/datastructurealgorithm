const simplifyPath = (path) => {
  const stack = [], files = path.split('/')
  for(const file of files){
    if(file == '..'){
      stack.pop()
    }else if(file == '.' || file == ''){
      continue
    }else{
      stack.push(file)
    }
  }
  return '/' + stack.join('/')
}