const spiralMatrix = (m, n, head) => {
  const mat = Array(m).fill().map((x) => x = Array(n).fill(-1))
  let top = 0, right = n - 1, bottom = m - 1, left = 0
  while(head){
    for(let col = left; col <= right; col++){
      if(head){
        mat[top][col] = head.val
        head = head.next
      }else{
        break
      }
    }
    top++
    for(let row = top; row <= bottom; row++){
      if(head){
        mat[row][right] = head.val
        head = head.next
      }else{
        break
      }
    }
    right--
    for(let col = right; col >= left; col--){
      if(head){
        mat[bottom][col] = head.val
        head = head.next
      }else{
        break
      }
    }
    bottom--
    for(let row = bottom; row >= top; row--){
      if(head){
        mat[row][left] = head.val
        head = head.next
      }else{
        break
      }
    }
    left++
  }
  return mat
}
