const kClosest = function(points, k) {
  let q = []
  for(const [x,y] of points){
    const distance = Math.sqrt(Math.pow(x,2)+Math.pow(y,2))
    q.push([[x,y],distance])
  }
  q.sort((a,b) => a[1] - b[1])
  return q.map((el) => el[0]).slice(0,k)
}