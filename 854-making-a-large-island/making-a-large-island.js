const largestIsland = (grid) => {
  
  // ititialize a map object and 4 directional array
  const map = {}, directions = [[1,0],[-1,0],[0,1],[0,-1]]
  
  // initialize a key to 2 so we are able to store the island
  // sizes, we don't use 1 since the island values begin with 1
  let key = 2
  
  // iterate through each cell and run the mapIsland helper
  // function to update the map object with the island sizes
  // based on the key value then increment the key value
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      if(grid[i][j] == 1 && !map[key]){
        mapIsland(map, grid, directions, i, j, key)
        key++
      }
    }
  }
  
  // initialize our max to 0 then update the max value to the
  // largest island we currently have stored in map
  let max = 0
  Object.values(map).map((val) => max = Math.max(max, val))
  
  // iterate through each cell and run the calcLargest helper
  // function to update the max to the largest possible combination
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
  // initialize our queue with the current coordinates and set
  // the cell value to the current key value and initialize the
  // total value to 1 to account for our current cell
  const q = [[x,y]]
  grid[x][y] = key
  let total = 1
  
  // iterate through the queue to map the island
  while(q.length){
    const [currentX, currentY] = q.shift()
    
    // create values for possible next coordinates in the matrix
    // check the values to see if they are in bounds and not 0
    for(const [directionX, directionY] of directions){
      const nextX = currentX + directionX, nextY = currentY + directionY
      if(nextX < grid.length && nextX >= 0 && nextY < grid[0].length && nextY >= 0 && grid[nextX][nextY] == 1){
        
        // if checks pass, set the cell to key value, increment total and
        // push the next coordinates of the island to the queue
        grid[nextX][nextY] = key
        total++
        q.push([nextX,nextY])
      }
    }
  }
  
  // assign the total size of our island to the key value in map
  map[key] = total
}

const calcLargest = (map, grid, directions, x, y) => {
  
  // set the total to 1 to account for changing the current cell to 1
  // initialize a new Set to hold key values for islands already seen
  let total = 1, seen = new Set()
  
  // create values for possible next coordinates in the matrix
  // check the values to see if they are in bounds, not 0 and unseen
  for(const [directionX, directionY] of directions){
    const nextX = x + directionX, nextY = y + directionY
    if(nextX < grid.length && nextX >= 0 && nextY < grid[0].length && nextY >= 0 && grid[nextX][nextY] != 0 && !seen.has(grid[nextX][nextY])){
      
      // add the value of the island to the total and add the island to seen
      total += map[grid[nextX][nextY]]
      seen.add(grid[nextX][nextY])
    }
  }
  
  // return total size of combinding islands
  return total
}