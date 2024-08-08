
const preorder = (root, arr = []) => {
  if(!root) return []
  arr.push(root.val)
  root.children.forEach((child) => preorder(child, arr))
  return arr
};