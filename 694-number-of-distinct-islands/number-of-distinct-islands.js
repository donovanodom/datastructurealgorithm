const numDistinctIslands = (grid) => {
  const row = grid[0].length, col = grid.length, res = new Set()
  for(let i = 0; i < col; i++){
    for(let j = 0; j < row; j++){
      if(grid[i][j] == 1){
        res.add(sinkIslands(grid,j,i,'S'))
      }
    }
  }
  return res.size
};

const sinkIslands = (grid, x, y, path) => {
  const row = grid[0].length, col = grid.length
  if(x < 0 || y < 0 || x >= row || y >= col || grid[y][x] == 0) return ''
  grid[y][x] = 0
  return path + 
    sinkIslands(grid, x, y + 1, 'D') +
    sinkIslands(grid, x, y - 1, 'U') +
    sinkIslands(grid, x + 1, y, 'R') +
    sinkIslands(grid, x - 1, y, 'L') + 'S'
};


