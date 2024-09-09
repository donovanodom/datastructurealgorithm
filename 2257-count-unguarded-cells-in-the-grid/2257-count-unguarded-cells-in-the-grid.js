const countUnguarded = function(m, n, guards, walls) {
  const mat = Array(m).fill().map(() => Array(n).fill(0))
  const row = mat.length, col = mat[0].length
  let total = row * col
  for(const [x,y] of walls){
    mat[x][y] = 'W'
    total--
  }
  const traverse = (initx, inity) => {
  const q = [[initx,inity,'']], dirs = {'u':[-1,0],'d':[1,0],'l':[0,-1],'r':[0,1]}
  while(q.length){
    const [x,y,dir] = q.shift()
    if(!dir){
      Object.keys(dirs).map((key) => {
        const [dirX, dirY] = dirs[key], nextX = x + dirX, nextY = y + dirY
        if(nextX >= 0 && nextY >= 0 && nextX < row && nextY < col && mat[nextX][nextY] != 'W' && mat[nextX][nextY] != 'G'){
          if(mat[nextX][nextY] == 0) total--
          mat[nextX][nextY] = 1
          q.push([nextX,nextY,key])
        }
      })
    }else{
      const [dirX, dirY] = dirs[dir], nextX = x + dirX, nextY = y + dirY
      if(nextX >= 0 && nextY >= 0 && nextX < row && nextY < col && mat[nextX][nextY] != 'W' && mat[nextX][nextY] != 'G'){
        if(mat[nextX][nextY] == 0) total--
        mat[nextX][nextY] = 1
        q.push([nextX,nextY,dir])
      }
    }
  }
}
  for(const [x,y] of guards){
    mat[x][y] = 'G'
    total--
  }
  for(const [x,y] of guards){
    traverse(x, y, mat, row, col, total)
  }
  return total
}

