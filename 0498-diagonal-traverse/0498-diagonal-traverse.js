const findDiagonalOrder = function(mat) {
  const res = [mat[0][0]], q = [[0,0,'up']]
  while(q.length){
    const [x, y, dir] = q.shift()
    if(dir == 'up'){
      if(mat[x - 1] && (mat[x - 1][y + 1] || mat[x - 1][y + 1] == 0)){
        res.push(mat[x - 1][y + 1])
        q.push([x - 1, y + 1, dir])
      }else{
        const [nX, nY, end] = reRoute([x,y], mat, dir)
        if(end) return res
        res.push(mat[nX][nY])
        q.push([nX, nY, 'down'])
      }
    } else if (dir == 'down'){
      if(mat[x + 1] && (mat[x + 1][y - 1] || mat[x + 1][y - 1] == 0)){
        res.push(mat[x + 1][y - 1])
        q.push([x + 1, y - 1, dir])
      }else{
        const [nX, nY, end] = reRoute([x,y], mat, dir)
        if(end) return res
        res.push(mat[nX][nY])
        q.push([nX, nY, 'up'])
      }
    }
  }
}

const reRoute = (cell, mat, dir) => {
  const [x,y] = cell
  if(dir == 'up'){
    if(mat[x] && (mat[x][y + 1] || mat[x][y + 1] == 0)){
      return [x, y + 1, false]
    } else if (mat[x + 1] && (mat[x + 1][y] || mat[x + 1][y] == 0)){
      return [x + 1, y, false]
    } else {
      return [x, y, true]
    }
  } else if (dir == 'down'){
    if(mat[x + 1] && (mat[x + 1][y] || mat[x + 1][y] == 0)){
      return [x + 1, y, false]
    } else if (mat[x] && (mat[x][y + 1] || mat[x][y + 1] == 0)){
      return [x, y + 1, false]
    } else {
      return [x, y, true]
    }
  }
}