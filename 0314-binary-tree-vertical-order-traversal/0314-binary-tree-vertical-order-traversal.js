const verticalOrder = (root) => {
  const map = {}
  const traverse = (node, col = 100, row = 1) => {
    if(!node) return
    if(!map[col]) map[col] = []
    map[col].push([row, node.val])
    traverse(node.left, col - 1, row + 1)
    traverse(node.right, col + 1, row + 1)
  }
  traverse(root)
  return Object.values(map).map((val) => val.sort((a,b) => a[0] - b[0]).map((val) => val[1]))
}