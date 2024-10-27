const treeDiameter = (edges) => {
  if(!edges.length) return 0
  const adj = {}, maxPaths = {}
  for(const [x,y] of edges){
    if(!adj[x]) adj[x] = []
    adj[x].push(y)
    if(!adj[y]) adj[y] = []
    adj[y].push(x)
  }
  const furthest = followFurthest(0,adj)[0]
  const count = followFurthest(furthest,adj)[1]
  return count
}

const followFurthest = (node, list) => {
  const seen = new Set(), q = [[node,0]]
  seen.add(node)
  while(q.length){
    const [cur,len] = q.shift()
    for(const next of list[cur]){
      if(!seen.has(next)){
        seen.add(next)
        q.push([next,len+1])
      }
    }
    if(!q.length) return [cur,len]
  }
}