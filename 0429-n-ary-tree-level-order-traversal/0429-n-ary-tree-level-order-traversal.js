const levelOrder = (root) => {
  if(!root) return []
  const q = [[root,0]], map = {}
  while(q.length){
    for(const [node,x] of q){
      if(!map[x]) map[x] = []
      map[x].push(node.val)
    }
    const len = q.length
    let i = 0
    while(i < len){
      let [node,x] = q.shift()
      node.children.map(child => q.push([child,x+1]))
      i++
    }
  }
  return Object.values(map).map(val => val)
}