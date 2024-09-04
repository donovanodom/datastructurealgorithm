const findCheapestPrice = function(n, flights, src, dst, k) {
  const nodes = {}, dp = Array(n).fill().map(() => Infinity), q = [[src,0,k+1]]
  for(const [a,b,cost] of flights){
    if(!nodes[a]) nodes[a] = []
    nodes[a].push([b,cost])
  }
  dp[src] = 0
  let min = Infinity
  while(q.length){
    const [flight,cost,stops] = q.shift()
    if(flight == dst){
      min = Math.min(min,cost)
      continue
    }
    if(nodes[flight]){
      for(const [nextFlight,nextCost] of nodes[flight]){
        const total = cost + nextCost, nextStops = stops - 1
        if(total <= dp[nextFlight] && nextStops >= 0){
          dp[nextFlight] = cost + nextCost
          q.push([nextFlight,cost + nextCost, nextStops]) 
        }
      }
    }
  }
  return min == Infinity ? -1 : min
}