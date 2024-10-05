const rightSideView = (root) => {
  
  // initialize a map object to hold an array of values of
  // each node at a given level in the tree and a result 
  // array to hold the last value of each of those arrays
  const map = {}, result = []
  
  // recursively traverse through the tree, prioritizing the 
  // left side first to ensure the last value to the right
  // on each level is the last value pushed to the level array
  const traverse = (root, level = 1) => {
    if(!root) return 
    if(!map[level]) map[level] = []
    map[level].push(root.val)
    if(root.left) traverse(root.left, level + 1)
    if(root.right) traverse(root.right, level + 1)
  }
  traverse(root)
  
  // remove the last value from each level array and add to result
  Object.values(map).forEach((val) => {
    result.push(val.pop())
  })
  return result
}