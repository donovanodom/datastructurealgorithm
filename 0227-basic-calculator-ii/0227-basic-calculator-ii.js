const calculate = function(s) {
  let cur = ''
  let sym = '+'
  const stack = []
  for(const char of s){
    if(Number.isInteger(Number(char))){
      cur += char
    }else{
      stack.push(handleArithmetic(sym, cur, stack))
      cur = ''
      sym = char
    }
  }
  stack.push(handleArithmetic(sym, cur, stack))
  return stack.reduce((a,b) => a + b)
}

const handleArithmetic = (sym, cur, stack) => {
  if(sym == '+') return Number(cur)
  if(sym == '-') return -Number(cur)
  if(sym == '*') return stack.pop() * Number(cur)
  if(sym == '/') return Math.trunc(stack.pop() / Number(cur))
}