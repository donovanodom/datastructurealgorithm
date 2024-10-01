const kClosest = function(points, k) {
  let q = new MinPriorityQueue()
  for(const [x,y] of points){
    const distance = Math.sqrt(Math.pow(x,2)+Math.pow(y,2))
    q.enqueue([x,y],distance)
  }
  const ans = []
  while(k){
    ans.push(q.dequeue().element)
    k--
  }
  return ans
}