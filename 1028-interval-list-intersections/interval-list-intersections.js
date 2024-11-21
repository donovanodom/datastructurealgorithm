const intervalIntersection = function(firstList, secondList) {
  const res = []
  for(const first of firstList){
    for(const second of secondList){
      if(checkIntersection(first, second)) res.push(createInterval(first, second))
    }
  }
  return res
}

const checkIntersection = (first, second) => {
  const [a1, b1] = first, [a2, b2] = second
  if((a1 <= a2 && b1 >= a2) ||
     (a1 >= a2 && a1 <= b2) ||
     (a1 >= a2 && b1 <= b2) ||
     (a2 >= a1 && b2 <= b1)
    ) return true
  return false
}

const createInterval = (first, second) => {
  const [a1, b1] = first, [a2, b2] = second
  return [Math.max(a1, a2), Math.min(b1, b2)]
}