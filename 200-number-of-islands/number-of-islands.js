const numIslands = (grid) => {
  let row = grid[0].length, col = grid.length, islands = 0
  if(row * col === 1) return grid[0][0]
  for(let i = 0; i < col; i++){
    for(let j = 0; j < row; j++){
      if(grid[i][j] === '1'){
        sinkIsland(grid,j,i)
        islands++
      }
    }
  }
  return islands
};

const sinkIsland = (grid,x,y) => {
  if(x < 0 || y < 0 || x > grid[0].length - 1 || y > grid.length - 1 || grid[y][x] != '1') return
  grid[y][x] = '0'
  sinkIsland(grid,x+1,y)
  sinkIsland(grid,x-1,y)
  sinkIsland(grid,x,y+1)
  sinkIsland(grid,x,y-1)
}