const minimumObstacles = function (grid) {
  const row = grid.length, col = grid[0].length
  const dp = new Array(row).fill().map(() => new Array(col).fill(Infinity))
  dp[0][0] = 0
  const q = [[0,0]], dirs = [[1,0],[-1,0],[0,1],[0,-1]]
  while(q.length){
    const [x,y] = q.shift(), tax = dp[x][y]
    for(const [dirX, dirY] of dirs){
      const nextX = x + dirX, nextY = y + dirY
      if(nextX >= 0 && nextY >= 0 && nextX < row && nextY < col && tax + grid[nextX][nextY] < dp[nextX][nextY]){
        dp[nextX][nextY] = tax + grid[nextX][nextY]
        q.push([nextX,nextY])
      }
    }
  }
  return dp[row - 1][col -1]
};