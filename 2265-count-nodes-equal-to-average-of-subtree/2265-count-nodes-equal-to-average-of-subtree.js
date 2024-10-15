const averageOfSubtree = (root) => {
  let count = 0
  const traverse = (node) => {
    if(!node) return [0, 0]
    let left = traverse(node.left)
    let right = traverse(node.right)
    let sum = node.val + left[0] + right[0]
    let total = left[1] + right[1] + 1
    if(node.val == Math.floor(sum/total)) count++
    return[sum, total]
  }
  traverse(root)
  return count
}