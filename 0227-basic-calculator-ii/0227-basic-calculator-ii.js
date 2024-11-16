const calculate = function(s) {
  const stack = []
  let sym = '+', cur = ''
  for(const char of s){
    if(Number.isInteger(Number(char))){
      cur += char
    } else {
      stack.push(handleArithmetic(sym, cur, stack))
      cur = ''
      sym = char
    }
  }
  stack.push(handleArithmetic(sym, cur, stack))
  return stack.reduce((a,b) => a + b)
}

const handleArithmetic = (sym, cur, stack) => {
  const num = Number(cur)
  let res = 0
  if(sym == '+') res += num
  if(sym == '-') res -= num
  if(sym == '*') res += stack.pop() * num
  if(sym == '/') res += Math.trunc(stack.pop() / num)
  return res
}