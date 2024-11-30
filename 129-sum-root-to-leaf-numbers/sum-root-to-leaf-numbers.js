const sumNumbers = (root, str = '', sum = 0) => { 
  if(!root) return sum
  str += root.val
  if(!root.left && !root.right){
    sum += Number(str)
  }else{
    return sumNumbers(root.left, str, sum) + sumNumbers(root.right, str, sum)
  }
  return sum 
}