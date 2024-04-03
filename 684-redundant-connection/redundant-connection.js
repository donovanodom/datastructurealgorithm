const findRedundantConnection = function(edges) {
  let parents = Array(edges.length + 1).fill(0).map((_,i) => i)
  for(const [a,b] of edges){
    if(union(parents,a,b)) return [a,b]
  }
}

const union = (parents,x,y) => {
  let repx = find(parents,x), repy = find(parents,y)
  if(repx == repy) return true
  parents[repy] = repx
}

const find = (parents,node) => {
  if(parents[node] == node){
    return node
  }else{
    return find(parents,parents[node])
  }
}
