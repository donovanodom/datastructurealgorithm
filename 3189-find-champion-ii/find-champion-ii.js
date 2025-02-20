const findChampion = function(n, edges) {
  const adj = {}
  for(const [a,b] of edges){
    if(!adj[b]) adj[b] = 0
    adj[b]++
  }
  const res = []
  for(let i = 0; i < n; i++){
    if(!adj[i]){
      res.push(i)
    }
  }
  return res.length == 1 ? res[0] : -1
}