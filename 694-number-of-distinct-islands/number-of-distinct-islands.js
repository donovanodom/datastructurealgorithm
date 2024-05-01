const numDistinctIslands = (grid) => {
  const row = grid[0].length, col = grid.length, res = new Set()
  for(let i = 0; i < col; i++){
    for(let j = 0; j < row; j++){
      if(grid[i][j]) res.add(sinkIsland(grid, j, i, 'S'))
    }
  }
  return res.size
};

const sinkIsland = (grid, x, y, path) => {
  const row = grid[0].length, col = grid.length
  if(x >= row || x < 0 || y >= col || y < 0 || grid[y][x] == 0) return ''
  grid[y][x] = 0
  return path + 
    sinkIsland(grid, x + 1, y, 'R') + 
    sinkIsland(grid, x - 1, y, 'L') +
    sinkIsland(grid, x, y - 1, 'U') +
    sinkIsland(grid, x, y + 1, 'D') +
    'S'
};
