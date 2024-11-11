const averageOfLevels = function(root) {
  const levels = {}
  const traverse = (node, level = 1) => {
    if(!node) return
    if(!levels[level]) levels[level] = [0,0]
    levels[level][0] += node.val
    levels[level][1]++
    traverse(node.left, level + 1)
    traverse(node.right, level + 1)
  }
  traverse(root)
  return Object.values(levels).reduce((arr,[sum,count]) => {
    return [...arr, sum / count]
  }, [])
}