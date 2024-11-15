const lowestCommonAncestor = function(p, q) {
  const seen = new Set()
  while(p.parent){
    seen.add(p.val)
    p = p.parent
  }
  while(q.parent){
    if(seen.has(q.val)) return q
    q = q.parent
  }
  return q
}