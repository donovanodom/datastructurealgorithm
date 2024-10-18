const isCompleteTree = (root) => {
  
  // initialize and array to hold arrays of
  // each row in the binary tree
  const levels = []
  
  // traverse the tree and keep track of the
  // level of the current node at index level
  // and push left value first and null if
  // node doesn' exist this will result in 
  // an 2D array representation of the tree
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

// helper function that will check the 2D
// array representation of the tree and 
// return false if we encounter an instance
// where a level has a value after an empty node
// or we have reached the end of the previous row
// and the current row has a valid node value
// if else return true for a valid tree
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