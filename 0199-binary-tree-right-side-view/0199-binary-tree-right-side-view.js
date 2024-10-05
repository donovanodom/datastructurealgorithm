const rightSideView = (root) => {
  const map = {}, ans = []
  const traverse = (root, level = 1) => {
    if(!root) return 
    if(!map[level]) map[level] = []
    map[level].push(root.val)
    if(root.left) traverse(root.left, level + 1)
    if(root.right) traverse(root.right, level + 1)
  }
  traverse(root)
  Object.values(map).forEach((val) => {
    ans.push(val.pop())
  })
  return ans
}