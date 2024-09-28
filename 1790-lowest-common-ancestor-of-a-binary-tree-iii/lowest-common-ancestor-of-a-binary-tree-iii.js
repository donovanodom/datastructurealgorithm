const lowestCommonAncestor = function(p, q) {
  
  // initialize Set to store values we come across
  // traversing upwards from p to root and add 
  // initial value of p node
  const seen = new Set()
  seen.add(p.val)
  
  // add the remainder of values from p to root
  while(p.parent){
    p = p.parent
    seen.add(p.val)
  }
  
  // if our initial q value exists in Set return value
  if(seen.has(q.val)) return q
  
  // traverse upwards from q to root and return
  // the first value that exists in Set
  while(q.parent){
    q = q.parent
    if(seen.has(q.val)) return q
  }
}