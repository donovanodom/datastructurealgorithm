const minimumTime = function(grid) {
  const row = grid.length, col = grid[0].length
  if(grid.length > 1 && grid[0].length > 1 && grid[1][0] > 1 && grid[0][1] > 1) return -1
  const dp = Array(grid.length).fill().map(() => Array(grid[0].length).fill(Infinity))
  dp[0][0] = 0
  const heap =  new MinPriorityQueue(), dirs = [[1,0],[-1,0],[0,1],[0,-1]]
  heap.enqueue([0,0,0],0)
  while(heap.size()){
    const [x,y,t] = heap.dequeue().element
    if(x == row - 1 && y == col - 1) return t
    for(const [dirX,dirY] of dirs){
      const nextX = x + dirX, nextY = y + dirY
      if(nextX >= 0 && nextY >= 0 && nextX < row && nextY < col){
        const nextT = grid[nextX][nextY] > t && (grid[nextX][nextY] - t) % 2 == 0 ? grid[nextX][nextY] + 1 : Math.max(grid[nextX][nextY], t + 1)
        if(nextT < dp[nextX][nextY]){
          dp[nextX][nextY] = nextT
          heap.enqueue([nextX,nextY,nextT],nextT)
        }
      }
    }
  }
  return dp[row-1][col-1]
}