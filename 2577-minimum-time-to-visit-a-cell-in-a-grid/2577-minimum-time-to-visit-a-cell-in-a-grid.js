const minimumTime = function(grid) {
  
  // store row and column lengths
  const row = grid.length, col = grid[0].length
  
  // return -1 if top-left cell is gridlocked
  if(grid.length > 1 && grid[0].length > 1 && grid[1][0] > 1 && grid[0][1] > 1) return -1
  
  // initialize dynamic programming matrix with Infinity values and set top-left cell to 0
  const dp = Array(grid.length).fill().map(() => Array(grid[0].length).fill(Infinity))
  dp[0][0] = 0
  
  // initialize a minimum priority heap and an array of direction coordinates
  // add the coordinates, time and priority for start point of top-left cell
  const heap =  new MinPriorityQueue(), dirs = [[1,0],[-1,0],[0,1],[0,-1]]
  heap.enqueue([0,0,0],0)
  
  // iterate through heap to determine next cell with lowest time
  while(heap.size()){
    const [x,y,time] = heap.dequeue().element
    
    // if we have arrived at the end of the matrix return time value
    if(x == row - 1 && y == col - 1) return time
    
    // iterate directions and create values for possible next coordinates in our matrix
    for(const [dirX,dirY] of dirs){
      const nextX = x + dirX, nextY = y + dirY
      
      // check if next coordinates are out of bounds
      if(nextX >= 0 && nextY >= 0 && nextX < row && nextY < col){
        
        // since you can bounce back and fourth between prior cells to 
        // reach the next value, set next time to one greater than next 
        // cell value if the difference between the two values is even, 
        // if the difference is not divisible by 2, set next time to the 
        // max value of the next cell value and current time + 1
        const nextTime = grid[nextX][nextY] > time && (grid[nextX][nextY] - time) % 2 == 0 ? grid[nextX][nextY] + 1 : Math.max(grid[nextX][nextY], time + 1)
        
        // if our next time is less than any values we've encountered at 
        // this  location, set the dp coordinates to next time and add the 
        // next coordinates and next time to the minimum priorty queue
        if(nextTime < dp[nextX][nextY]){
          dp[nextX][nextY] = nextTime
          heap.enqueue([nextX,nextY,nextTime],nextTime)
        }
      }
    }
  }
  
  // return the minimum time it took to reach the last cell
  return dp[row-1][col-1]
}