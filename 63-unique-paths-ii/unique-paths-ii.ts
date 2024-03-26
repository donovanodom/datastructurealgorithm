function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let rowLength = obstacleGrid[0].length, colLength = obstacleGrid.length
  if(obstacleGrid[colLength - 1][rowLength - 1] === 1) return 0
  let grid = new Array(colLength).fill(0).map(() => new Array(rowLength).fill(0));
  for(let i = 0; i < rowLength; i++){
    if(obstacleGrid[0][i]) break
    if(grid[0][i] == 0 ) grid[0][i] = 1
  }
  for(let i = 0; i < colLength; i++){
    if(obstacleGrid[i][0]) break
    if(grid[i][0] == 0 ) grid[i][0] = 1
  }
  for(let i = 1; i < colLength; i++){
    for(let j = 1; j < rowLength; j++){
      if(obstacleGrid[i][j]) continue
      grid[i][j] += grid[i-1][j] + grid[i][j-1]
    }
  }
  return grid[colLength - 1][rowLength - 1]
};