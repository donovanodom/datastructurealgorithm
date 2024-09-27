const verticalOrder = function(root) {
  
  // assign map to traverse function
  let map = traverse(root)
  
  // iterate through map object and return each col values 
  // from left to right after sorting each array by their row
  return Object.values(map).map((values) => {
    
    // sorting by row ensures vertical order since the top most
    // value should have the lowest row value
    values.sort((a,b) => a[0] - b[0])
    
    // return only the node value and now the array
    return values.map((val) => val[1])
  })
}

// traverse function will traverse the tree and store the values
// and row of the a node for a given column, initialize the row 
// to 0 for the starting node and col to 100 given that the 
// constraints are -100 <= Node.val <= 100, we should never 
// reach a column less than zero
const traverse = (node, row = 0, col = 100, map = {}) => {
  
  // if no node given in first call, return an empty array
  if(!node) return []
  
  // initialize key of col to an empty array
  if(!map[col]) map[col] = []
  
  // store row and value pair to col
  map[col].push([row,node.val])
  
  // if node.left exists, recursively call with function with
  // row + 1 (going down tree) and col - 1 (going left tree)
  if(node.left) traverse(node.left, row + 1, col - 1, map)
  
  // if node.right exists, recursively call with function with
  // row + 1 (going down tree) and col + 1 (going right tree)
  if(node.right) traverse(node.right, row + 1, col + 1, map)
  
  // return map object once traversal is completed
  return map
}