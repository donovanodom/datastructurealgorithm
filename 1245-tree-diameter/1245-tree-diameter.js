const treeDiameter = (edges) => {
  
  // if empty array return 0 as max
  if(!edges.length) return 0
  
  // create an adjacency list for edges between nodes
  const adj = {}
  for(const [x,y] of edges){
    if(!adj[x]) adj[x] = []
    adj[x].push(y)
    if(!adj[y]) adj[y] = []
    adj[y].push(x)
  }
  
  // define furthest as the furthest node from any 
  // node and define count as the distnace of the 
  // furthest node from that node and return count
  const furthest = followFurthest(0,adj)[0]
  const count = followFurthest(furthest,adj)[1]
  return count
}

// helper function that returns the furthest node
// and distance from a given node and adjacency list
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
    
    // if queue is empty the furthest possible node
    // must be the current node in our while loop
    if(!q.length) return [cur,len]
  }
}