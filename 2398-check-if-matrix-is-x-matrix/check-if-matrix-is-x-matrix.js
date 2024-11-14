const checkXMatrix = function(grid) {
  for(let i = 0; i < grid.length; i++){
    if(!grid[i][i]) return false
    grid[i][i] = 0
  }
  if(grid.length % 2 != 0) grid[Math.floor(grid.length / 2)][Math.floor(grid.length / 2)] = 1

  for(let i = 0; i < grid.length; i++){
    if(!grid[i][grid.length - i - 1]) return false
    grid[i][grid.length - i - 1] = 0
  }
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      if(grid[i][j]) return false
    }
  }
  return true
}
