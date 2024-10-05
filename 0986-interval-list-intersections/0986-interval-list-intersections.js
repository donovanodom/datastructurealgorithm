const intervalIntersection = function(firstList, secondList) {
  const result = []
  
  // iterate first and second list then check to see if an
  // intersection exist. Call the helper function to calculate
  // the intersection and push return value to result
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
  
  // check if there is any overlap in the intervals
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
  
  // return the minimum start and maximum end of
  // the combination of the two intervals
  return [Math.max(a1,a2), Math.min(b1,b2)]
}