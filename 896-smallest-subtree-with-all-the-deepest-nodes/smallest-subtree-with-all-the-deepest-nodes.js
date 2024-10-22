/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
  let deepest = 0
  const nodes = []
  const findDeepestLevel = (node, level = 0) => {
    if(!node) return 
    deepest = Math.max(deepest, level)
    findDeepestLevel(node.left, level + 1)
    findDeepestLevel(node.right, level + 1)
  }
  const findDeepestNodes = (node, level = 0) => { 
    if(!node) return
    if(level == deepest) nodes.push(node.val)
    findDeepestNodes(node.left, level + 1)
    findDeepestNodes(node.right, level + 1)
  }
  const findDeepestTree = (node) => { 
    if(!node) return node
    if(nodes.includes(node.val)) return node
    const left = findDeepestTree(node.left)
    const right = findDeepestTree(node.right)
    if(left && right) return node
    return left || right
  }
  findDeepestLevel(root)
  findDeepestNodes(root)
  return findDeepestTree(root)
}