const isCompleteTree = (root) => {
  const levels = []
  const traverse = (node, level = 0) => {
    if(!node){
      if(!levels[level]) levels[level] = []
      levels[level].push(null)
      return
    }
    traverse(node.left, level + 1)
    traverse(node.right, level + 1)
    if(!levels[level]) levels[level] = []
    levels[level].push(node.val)
  }
  traverse(root)
  return validLevels(levels)
}

const validLevels = (levels) => {
  let i = 0, end = false
  while(i < levels.length){
    let j = 0
    while(j < levels[i].length){
      if(levels[i][j] == null){
        end = true
        if(levels[i][j + 1]) return false
      }else if(end){
        return false
      }
      j++
    }
    i++
  }
  return true
}