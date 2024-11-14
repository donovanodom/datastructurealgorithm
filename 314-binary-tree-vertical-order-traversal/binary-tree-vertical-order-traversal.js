const verticalOrder = function(root) {
  if(!root) return []
  const map = {}, q = [[root, 100]]
  while(q.length){
    const [node, col] = q.shift()
    if(!map[col]) map[col] = []
    map[col].push(node.val)
    if(node.left) q.push([node.left, col - 1])
    if(node.right) q.push([node.right, col + 1])
  }
  return Object.values(map)
}