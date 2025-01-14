const findDiagonalOrder = function(mat) {
  const res = [], q = [[0,0,'up']], row = mat.length, col = mat[0].length
  while(q.length){
    const [x, y, dir] = q.shift()
    res.push(mat[x][y])
    if(dir == 'up'){
      if(x - 1 >= 0 && y + 1 < col){
        q.push([x - 1, y + 1, dir])
      }else{
        const [nX, nY, end] = reRoute([x,y], mat, dir)
        if(end) return res
        q.push([nX, nY, 'down'])
      }
    } else if (dir == 'down'){
      if(x + 1 < row && y - 1 >= 0){
        q.push([x + 1, y - 1, dir])
      }else{
        const [nX, nY, end] = reRoute([x,y], mat, dir)
        if(end) return res
        q.push([nX, nY, 'up'])
      }
    }
  }
}

const reRoute = (cell, mat, dir) => {
  const [x,y] = cell, row = mat.length, col = mat[0].length
  if(dir == 'up'){
    if(y + 1 < col){
      return [x, y + 1, false]
    } else if (x + 1 < row){
      return [x + 1, y, false]
    } else {
      return [x, y, true]
    }
  } else if (dir == 'down'){
    if(x + 1 < row){
      return [x + 1, y, false]
    } else if (y + 1 < col){
      return [x, y + 1, false]
    } else {
      return [x, y, true]
    }
  }
}