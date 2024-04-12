const searchMatrix = (mat, t) => {
  let i = 0
  while(i < mat.length - 1){
    if(mat[i+1][0] > t) return searchRow(mat[i], t)
    i++
  }
  return searchRow(mat[mat.length-  1], t)
}

const searchRow = (row, t) => {
  for(const num of row){
    if(num == t) return true
  }
  return false
}