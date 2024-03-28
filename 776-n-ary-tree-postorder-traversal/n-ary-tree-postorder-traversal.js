/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root, arr = []) {
  if(!root) return  []
  root.children.forEach((child) => postorder(child, arr))
  arr.push(root.val)
  return arr
};