const lowestCommonAncestor = (root, p, q) => {
  
  // helper function to determine if node exists in tree
  const findNode = (node, target) => {
    
    // return false if a non-existent node is reached
    // and return true if the target node is reached
    if(!node) return false
    if(node == target) return true
    
    // traverse through left and right branches of the tree
    const left = findNode(node.left, target)
    const right = findNode(node.right, target)
    
    // return true if either left or right reaches target
    return left || right
  }
  
  // helper function for finding least common ancestor
  const findLCA = (node, p, q) => {
    
    // return node whether we reach either node or null node
    if(!node || node == p || node == q) return node
    
    // traverse through left and right branches of the tree
    const left = findLCA(node.left, p, q)
    const right = findLCA(node.right, p, q)
    
    // return node if both left and right reaches targets 
    // or either node that can be reached making that 
    // node the least common ancestor and the other a descendant
    if(left && right) return node
    return left ?? right
  }
    
  // if either node does not exist in tree, return false, otherwise
  // return the node from findLCA helper function
  return (findNode(root,p) && findNode(root,q)) && findLCA(root, p, q)
}