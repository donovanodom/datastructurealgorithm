const shortestPath = (grid, k) => {
  const row = grid[0].length, col = grid.length
  if(row * col == 1) return 0
  let q = [[0,0,k]], nextQ = [], visited = new Set(`0:0:${k}`), moves = 0
  const directions = [[1,0],[-1,0],[0,1],[0,-1]]
  while(q.length){
    let [x,y,e] = q.shift()
    if(x === row - 1 && y == col - 1) return moves
    for(const [dirX,dirY] of directions){
      let nextX = x + dirX, nextY = y + dirY
      if(nextX < 0 || nextY < 0) continue
      if(nextX > row - 1 || nextY > col - 1) continue
      let obstacle = grid[nextY][nextX]
      if(obstacle && e < 1) continue
      let nextE = e - obstacle
      let nextP = [nextX,nextY,nextE], nextV = `${nextX}:${nextY}:${nextP}`
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