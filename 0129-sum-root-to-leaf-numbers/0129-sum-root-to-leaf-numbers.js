const sumNumbers = (root, str = '', sum = 0) => { 
  if(!root) return 0
  str += root.val
  if(!root.left && !root.right){
    sum += Number(str)
    return sum
  } 
  return sumNumbers(root.left, str, sum) + sumNumbers(root.right, str, sum)
}