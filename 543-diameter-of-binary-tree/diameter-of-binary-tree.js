const diameterOfBinaryTree = (root) => {
  if(!root) return 0
  let diameter = 0
  const traverse = (node) => {
    if(!node) return 0
    const left = traverse(node.left), right = traverse(node.right)
    diameter = Math.max(diameter, left + right)
    return Math.max(left, right) + 1
  } 
  traverse(root)
  return diameter
}