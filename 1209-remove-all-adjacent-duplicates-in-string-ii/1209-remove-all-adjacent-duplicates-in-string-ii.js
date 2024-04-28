const removeDuplicates = (s, k) => {
  if(s.length < k){
    return s
  }
  const stack = []
  for(const char of s){
    if(stack.length && char == stack[stack.length - 1][0]){
      stack[stack.length - 1][1]++
      if(stack[stack.length - 1][1] == k){
         stack.pop()       
      }
    }else{
      stack.push([char,1])
    }
  }
  let res = ''
  for(const [char,count] of stack){
    res += char.repeat(count)
  }
  return res
};