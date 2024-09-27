const verticalOrder = function(root) {
  let map = traverse(root)
  return Object.values(map).map((values) => {
    values.sort((a,b) => a[0] - b[0])
    return values.map((val) => val[1])
  })
};

const traverse = (node, row = 0, col = 100, map = {}) => {
  if(!node) return []
  if(!map[col]) map[col] = []
  map[col].push([row,node.val])
  if(node.left) traverse(node.left, row + 1, col - 1, map)
  if(node.right) traverse(node.right, row + 1, col + 1, map)
  return map
}