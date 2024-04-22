const traverse = (node, distance, res) => {
  if(!node) return []
  if(!node.left && !node.right) return [1]
  const left = traverse(node.left, distance, res), right = traverse(node.right, distance, res)
  for(const l of left){
    for(const r of right){
      if(l + r <= distance) res['good']++
    }
  }
  return [...left,...right].map(v => v + 1)
}

const countPairs = (root, distance) => {
  let res = {'good': 0}
  traverse(root, distance, res)
  return res['good']
};