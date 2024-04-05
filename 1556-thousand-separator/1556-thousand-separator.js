const thousandSeparator = (n) => {
  let str = String(n), i = str.length
  if(str.length < 4)  return str
  while(i > 3){
    str =  str.slice(0,i-3) + '.' + str.slice(i-3)
    i -= 3
  }
  return str
};