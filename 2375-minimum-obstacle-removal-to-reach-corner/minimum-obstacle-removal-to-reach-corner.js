const minimumObstacles = function (grid) {
  
  // store row and column lengths
  const row = grid.length, col = grid[0].length
  
  // initialize dynamic programming matrix with Infinity values and set top-left cell to 0
  const dp = new Array(row).fill().map(() => new Array(col).fill(Infinity))
  dp[0][0] = 0
  
  // initialize a minimum priority heap and an array of direction coordinates
  // add the coordinates, time and priority for start point of top-left cell
  const heap = new MinPriorityQueue(), dirs = [[1,0],[-1,0],[0,1],[0,-1]]
  heap.enqueue([0,0],0)
  
  // iterate through heap to determine next cell with lowest obstacles removed
  // set value for obstacles removed to initial value of top-left of dp
  while(heap.size()){
    const [x,y] = heap.dequeue().element, tax = dp[x][y]
    
    // return minimum obstacles removed once we arrive at the end of the matrix
    if(x == row - 1 && y == col - 1) return tax
    
    // iterate through our directions array and create values for a possible next coordinates
    // in our matrix, check the values to see if they are in bounds and less than the minimum 
    // obstacles removed for any other path that led us to this next coordinate, stored in dp
    for(const [dirX, dirY] of dirs){
      const nextX = x + dirX, nextY = y + dirY
      if(nextX >= 0 && nextY >= 0 && nextX < row && nextY < col && tax + grid[nextX][nextY] < dp[nextX][nextY]){
        
        // add coordinates and obstacles removed tax to queue if next coordinates pass checks
        dp[nextX][nextY] = tax + grid[nextX][nextY]
        heap.enqueue([nextX,nextY],tax)
      }
    }
  }
};