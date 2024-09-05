/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
const shortestDistance = function(maze, start, destination) {
  const row = maze.length, col = maze[0].length, dp = Array(maze.length).fill().map(() => Array(maze[0].length).fill(Infinity))
  const q = [[start,0,'']], dirs = {'up': [-1,0], 'down': [1,0], 'left': [0,-1], 'right': [0,1]}
  while(q.length){
    const [[x,y],distance,direction] = q.shift()
    if(!direction){
      Object.keys(dirs).forEach((key) => {
        const [dirX,dirY] = dirs[key], nextX = x + dirX, nextY = y + dirY
        if(nextX >= 0 && nextY >= 0 && nextX < row && nextY < col && maze[nextX][nextY] != 1){
          q.push([[nextX,nextY],distance+1,key])
        }
      })
    }else{
      const [dirX,dirY] = dirs[direction], nextX = x + dirX, nextY = y + dirY
      if(nextX >= 0 && nextY >= 0 && nextX < row && nextY < col && maze[nextX][nextY] != 1){
        q.push([[nextX,nextY],distance+1,direction])
      }else if(distance < dp[x][y]){
        dp[x][y] = distance
        if(x == destination[0] && y == destination[1]) return distance
        Object.keys(dirs).forEach((key) => {
          if(key != direction){
            const [newDirX,newDirY] = dirs[key], newDirectionX = x + newDirX, newDirectionY = y + newDirY
            if(newDirectionX >= 0 && newDirectionY >= 0 && newDirectionX < row && newDirectionY < col && maze[newDirectionX][newDirectionY] != 1){
              q.push([[newDirectionX,newDirectionY],distance+1,key])
            }
          }
        })
      }
    }
  }
  return -1
};