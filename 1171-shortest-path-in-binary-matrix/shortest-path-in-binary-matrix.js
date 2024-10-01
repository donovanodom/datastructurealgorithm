const shortestPathBinaryMatrix = (grid) => {
  const row = grid.length, col = grid[0].length, dp = Array(row).fill().map((r) => r = Array(col).fill(Infinity))
  dp[0][0] == 1
  if(grid[0][0] == 1 || grid[row-1][col-1] == 1) return -1
  if(row * col == 1) return 1
  const q = new MinPriorityQueue(), dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
  q.enqueue([0,0,1],1)
  while(q.size()){
    const [x,y,p] = q.dequeue().element
    if(x == row - 1 && y == col - 1) return p
    for(const [dx,dy] of dirs){
      const nx = dx + x, ny = dy + y, np = p + 1
      if(nx >= 0 && ny >= 0 && nx < row && ny < row && grid[nx][ny] == 0 && np < dp[nx][ny]){
        dp[nx][ny] = np
        q.enqueue([nx,ny,np],np)
      }
    }
  }
  return dp[row-1][col-1] == Infinity ? -1 : dp[row-1][col-1]
}