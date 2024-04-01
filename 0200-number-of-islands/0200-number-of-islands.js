const numIslands = (grid) => {
  let row = grid[0].length, col = grid.length
  if(row * col == 1) return Number(grid[0][0])
  let island = 0
  for(let i = 0; i < col; i++){
    for(let j = 0; j < row; j++){
      if(grid[i][j] == '1'){
        island++
        sinkIsland(grid,j,i)
      }
    }
  }
  return island
};

const sinkIsland = (grid,x,y) => {
  if(x >= 0 && y >= 0 && x < grid[0].length && y< grid.length && grid[y][x] == '1'){
    grid[y][x] = '0'
    sinkIsland(grid,x+1,y)
    sinkIsland(grid,x-1,y)
    sinkIsland(grid,x,y+1)
    sinkIsland(grid,x,y-1)
  }
}