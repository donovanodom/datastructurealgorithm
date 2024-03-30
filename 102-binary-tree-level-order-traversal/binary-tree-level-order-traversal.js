const levelOrder = (root, level = 0, map = {}) => {
  if(!root) return []
  if(!map[level]) map[level] = []
  map[level].push(root.val)
  if(root.left) levelOrder(root.left, level + 1, map)
  if(root.right) levelOrder(root.right, level + 1, map)
  return Object.values(map).map(val => val)
};