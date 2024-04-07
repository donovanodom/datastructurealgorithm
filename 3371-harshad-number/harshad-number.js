const sumOfTheDigitsOfHarshadNumber = (x) => {
  let sum = 0
  for(const num of String(x)){
    sum += Number(num)
  }
  if(x % sum === 0) return sum
  return -1
}