const calculate = function(s) {
  const stack = []
  let sym = '+', cur = ''
  for(const num of s){
    if(!isNaN(Number(num))){
      cur += String(num)
    }else if(num == ' '){
      continue
    }else{
      stack.push(handleMath(stack, sym, Number(cur)))
      sym = num
      cur = ''
    }
  }
  stack.push(handleMath(stack, sym, Number(cur)))
  return stack.reduce((a,b) => a + b)
}

const handleMath = (stack, sym, cur) => {
  if(sym == '+') return cur
  if(sym == '-') return -cur
  if(sym == '*') return stack.pop() * cur
  if(sym == '/') return Math.trunc(stack.pop() / cur)
}

// O(n) Time and Space