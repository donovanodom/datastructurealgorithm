const validateStackSequences = function(pushed, popped) {
  let popIndex = 0
  const stack = []

  for(const el of pushed){
    stack.push(el) 
    while(stack.length && popIndex <  popped.length && popped[popIndex] == stack[stack.length - 1]) {
      popIndex++
      stack.pop()
    }
  }
  return !stack.length
}