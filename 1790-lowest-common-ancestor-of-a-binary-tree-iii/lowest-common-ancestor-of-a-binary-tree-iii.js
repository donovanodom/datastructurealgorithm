const lowestCommonAncestor = function(p, q) {
  const seen = new Set()
  seen.add(p.val)
  while(p.parent){
    p = p.parent
    seen.add(p.val)
  }
  if(seen.has(q.val)) return q
  while(q.parent){
    q = q.parent
    if(seen.has(q.val)) return q
  }
}