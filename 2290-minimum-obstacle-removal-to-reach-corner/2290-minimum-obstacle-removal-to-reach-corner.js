const minimumObstacles = function (grid) {
  const row = grid.length, col = grid[0].length
  const dp = new Array(row).fill().map(() => new Array(col).fill(Infinity))
  dp[0][0] = 0
  const heap = new MinPriorityQueue(), dirs = [[1,0],[-1,0],[0,1],[0,-1]]
  heap.enqueue([0,0],0)
  while(heap.size()){
    const [x,y] = heap.dequeue().element, tax = dp[x][y]
    if(x == row - 1 && y == col - 1) return tax
    for(const [dirX, dirY] of dirs){
      const nextX = x + dirX, nextY = y + dirY
      if(nextX >= 0 && nextY >= 0 && nextX < row && nextY < col && tax + grid[nextX][nextY] < dp[nextX][nextY]){
        dp[nextX][nextY] = tax + grid[nextX][nextY]
        heap.enqueue([nextX,nextY],tax)
      }
    }
  }
};