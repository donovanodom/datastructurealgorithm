const shortestPath = (grid, k) => {
  let row = grid[0].length, col = grid.length
  if(row * col === 1) return 0
  let q = [[0,0,k]], nextQ = [], visited = new Set(`0:0:${k}`), moves = 0
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]]
  while(q.length){
    const [x,y,e] = q.shift()
    if(x == row - 1 && y == col - 1) return moves
    for(const [dirX,dirY] of dirs){
      let nextX = dirX + x, nextY = dirY + y
      if(nextX < 0 || nextY < 0 || nextX >= row || nextY >= col) continue
      let obstacle = grid[nextY][nextX]
      if(obstacle && e < 1) continue
      let nextE = e - obstacle
      let nextP = [nextX,nextY,nextE], nextV = `${nextX}:${nextY}:${nextE}`
      if(!visited.has(nextV)){
        visited.add(nextV)
        nextQ.push(nextP)
      }
    }
    if(!q.length){
      q = nextQ
      nextQ = []
      moves++
    }
  }
  return -1
};