const validateStackSequences = function(pushed, popped) {
  let poppedIndex = 0
  const stack = []
  for(const num of pushed){
    stack.push(num)
    while(poppedIndex < popped.length && popped[poppedIndex] == stack[stack.length - 1]){
      stack.pop()
      poppedIndex++
    }
  }
  return !stack.length
}