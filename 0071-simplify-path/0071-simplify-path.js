const simplifyPath = (path) => {
  
  // initialize a stack and an array of files
  // split by '/' this will eliminate any
  // duplicate forward slashes and leave only 
  // with files and dot sequences
  const stack = [], files = path.split('/')
  
  // iterate through files and if we encounter
  // double dots and a files in the stack, 
  // remove the most recent file symbolizing
  // going back one level in the file tree
  for(const file of files){
    if(file == '..'){
      if(stack.length) stack.pop()
      
     // if the file is a valid string and not a 
     // singulare dot add it to the stack
    }else if(file && file != '.'){
      stack.push(file)
    }
  }
  
  // begin the path with a forward slash and
  // append the files joined by a forward slash
  return '/' + stack.join('/')
}