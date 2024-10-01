const largestIsland = (grid) => {
  const map = {}, directions = [[1,0],[-1,0],[0,1],[0,-1]]
  let key = 2
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      if(grid[i][j] == 1 && !map[key]){
        mapIsland(map, grid, directions, i, j, key)
        key++
      }
    }
  }
  let max = 0
  Object.values(map).map((val) => max = Math.max(max, val))
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      if(grid[i][j] == 0){
        max = Math.max(max, calcLargest(map, grid, directions, i, j))
      }
    }
  }
  return max
}

const mapIsland = (map, grid, directions, x, y, key) => {
  const q = [[x,y]]
  grid[x][y] = key
  let total = 1
  while(q.length){
    const [currentX, currentY] = q.shift()
    for(const [directionX, directionY] of directions){
      const nextX = currentX + directionX, nextY = currentY + directionY
      if(nextX < grid.length && nextX >= 0 && nextY < grid[0].length && nextY >= 0 && grid[nextX][nextY] == 1){
        grid[nextX][nextY] = key
        total++
        q.push([nextX,nextY])
      }
    }
  }
  map[key] = total
}

const calcLargest = (map, grid, directions, x, y) => {
  let total = 1, seen = new Set()
  for(const [directionX, directionY] of directions){
    const nextX = x + directionX, nextY = y + directionY
    if(nextX < grid.length && nextX >= 0 && nextY < grid[0].length && nextY >= 0 && grid[nextX][nextY] != 0 && !seen.has(grid[nextX][nextY])){
      total += map[grid[nextX][nextY]]
      seen.add(grid[nextX][nextY])
    }
  }
  return total
}