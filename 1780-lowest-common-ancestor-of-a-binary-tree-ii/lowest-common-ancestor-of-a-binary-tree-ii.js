const lowestCommonAncestor = (root, p, q) => {
  const findNodes = (node, target) => {
    if(!node) return false
    if(node == target) return true
    const left = findNodes(node.left, target)
    const right = findNodes(node.right, target)
    return left || right
  }
  const findLCA = (node, p, q) => {
    if(!node || node == p || node == q) return node
    const left = findLCA(node.left, p, q)
    const right = findLCA(node.right, p, q)
    if(left && right) return node
    return left ?? right
  }
  return (findNodes(root,p) && findNodes(root,q)) && findLCA(root, p, q)
}