const numDistinctIslands = (grid) => {
  const row = grid[0].length, col = grid.length, set = new Set()
  for(let i = 0; i < col; i++){
    for(let j = 0; j < row; j++){
      if(grid[i][j]) set.add(sinkIsland(grid, j, i, 'S'))
    }
  }
  return set.size
};

const sinkIsland = (grid, x, y, path) => {
  if(x < 0 || y < 0 || x >= grid[0].length || y >= grid.length || grid[y][x] == 0){
    return ''
  }
  grid[y][x] = 0
  return path + sinkIsland(grid, x + 1, y, 'R') + sinkIsland(grid, x - 1, y, 'L') + sinkIsland(grid, x, y + 1, 'U') + sinkIsland(grid, x, y - 1, 'D') + 'S'
} 
