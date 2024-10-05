const intervalIntersection = function(firstList, secondList) {
  const result = []
  for(const [a1, b1] of firstList){
    for(const [a2, b2] of secondList){
      if((a1 > b2) || (b1 < a2)) continue
      if(checkIntersection([a1, b1],[a2, b2])){
        result.push(calcIntersection([a1, b1],[a2, b2]))
      } 
    }
  }
  return result
}

const checkIntersection = (first, second) => {
  const [a1, b1] = first, [a2, b2] = second
  if(
    (a1 <= a2 && a2 <= b1) || 
    (a2 <= a1 && a1 <= b2) || 
    (a1 >= a2 && b1 <= b2) || 
    (a2 >= a1 && b2 <= b1)
  ) return true
  return false
}

const calcIntersection = (first, second) => {
  const [a1, b1] = first, [a2, b2] = second
  return [Math.max(a1,a2), Math.min(b1,b2)]
}