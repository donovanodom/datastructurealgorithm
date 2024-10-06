const sumNumbers = function(root, str = '', sum = 0) {
  
  // if no root return 0 as sum
  if(!root) return 0
  
  // append the current node val to the end string
  str += root.val
  
  // if a leaf is reached, add string as a number to the sum and return sum
  if(!root.left && !root.right){
    sum += Number(str)
    return sum
  }
  
  // return the sum of traversing left and right down tree
  return sumNumbers(root.left, str, sum) + sumNumbers(root.right, str, sum)
}