const subtreeWithAllDeepest = (root) => {
  let deepest = 0, nodes = []
  
  // traverse tree to find the nodes at the deepest level
  const findDeepestLevel = (node, level = 0) => {
    if(!node) return 
    if(level > deepest){
      nodes = [node.val]
      deepest = level
    }else if(level == deepest){
      nodes.push(node.val)
    }
    findDeepestLevel(node.left, level + 1)
    findDeepestLevel(node.right, level + 1)
  }
  
  // traverse tree to find the least common parent
  // that has all nodes at the deepest level 
  const findDeepestTree = (node) => { 
    if(!node) return node
    if(nodes.includes(node.val)) return node
    const left = findDeepestTree(node.left)
    const right = findDeepestTree(node.right)
    if(left && right) return node
    return left || right
  }
  findDeepestLevel(root)
  return findDeepestTree(root)
}