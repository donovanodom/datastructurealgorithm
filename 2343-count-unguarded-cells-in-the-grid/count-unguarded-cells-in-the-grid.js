const countUnguarded = function(m, n, guards, walls) {
  
  // create matrix based based on m and n values
  const mat = Array(m).fill().map(() => Array(n).fill(0))
  
  // store row and column lengths and initialize total number of cells
  const row = mat.length, col = mat[0].length
  let total = row * col
  
  // iterate through walls array and set wall locations in matrix
  // each time we encounter a wall, decrement the total
  for(const [x,y] of walls){
    mat[x][y] = 'W'
    total--
  }
  
  // create a traversal function to follow the paths each guard sees
  const traverse = (initx, inity) => {
    
    // initialize a queue with the coordinates of a guard and an object
    // with keys for each direction of traversal and corresponding values
    const q = [[initx,inity,'']], dirs = {'u':[-1,0],'d':[1,0],'l':[0,-1],'r':[0,1]}
    
    // iterate through queue to follow the paths each guard sees
    while(q.length){
      const [x,y,dir] = q.shift()
      
      // if direction not provided this is our starting point
      // we need to check all four directions for valid paths
      if(!dir){
        Object.keys(dirs).map((key) => {
          
          // create values for a possible next coordinates in our matrix
          // check the values to see if they are in bounds and not a wall or guard
          const [dirX, dirY] = dirs[key], nextX = x + dirX, nextY = y + dirY
          if(nextX >= 0 && nextY >= 0 && nextX < row && nextY < col && mat[nextX][nextY] != 'W' && mat[nextX][nextY] != 'G'){
            
            // decrement total if next is a valid coordinate and has not already been marked as seen
            // set matrix value to 1 for seen and push next coordinates and direction to queue
            if(mat[nextX][nextY] == 0) total--
            mat[nextX][nextY] = 1
            q.push([nextX,nextY,key])
          }
        })
      }else{
        
        // create values for a possible next coordinate in our matrix
        // check the values to see if they are in bounds and not a wall or guard
        const [dirX, dirY] = dirs[dir], nextX = x + dirX, nextY = y + dirY
        if(nextX >= 0 && nextY >= 0 && nextX < row && nextY < col && mat[nextX][nextY] != 'W' && mat[nextX][nextY] != 'G'){
          
          // decrement total if next is a valid coordinate and has not already been marked as seen
          // set matrix value to 1 for seen and push next coordinates and direction to queue
          if(mat[nextX][nextY] == 0) total--
          mat[nextX][nextY] = 1
          q.push([nextX,nextY,dir])
        }
      }
    }
  }
  
  // iterate through guards array and set guard locations in matrix
  // each time we encounter a guard, decrement the total
  for(const [x,y] of guards){
    mat[x][y] = 'G'
    total--
  }
  
  // iterate through guards array and run traversal function for each coordinate
  for(const [x,y] of guards){
    traverse(x, y, mat, row, col, total)
  }
  
  // return the remaining total of spaces unseen and not a wall or guard
  return total
}

