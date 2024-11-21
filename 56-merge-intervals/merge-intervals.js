const merge = (intervals) => {
  let i = 1
  intervals.sort((a,b) => a[0] - b[0])
  while(i < intervals.length){
    const [a1, a2] = intervals[i - 1], [b1, b2] = intervals[i]
    if((a1 <= b1 && a2 >= b1) ||
       (a1 >= b1 && a1 <= b2) ||
       (a1 <= b1 && a2 >= b2) ||
       (a1 >= b1 && a2 <= b2)
      ){
      intervals[i - 1] = [Math.min(a1, b1), Math.max(a2, b2)]
      intervals.splice(i,1)
    } else {
      i++
    }
  }
  return intervals
}
