/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const gameOfLife = function(board) {
  const dirs = [[1,0], [1,1], [0,1], [-1,1], [-1,-1], [1,-1], [0,-1], [-1,0]]
  const q = []
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[0].length; j++){
      let count = countLiving(board, i, j, dirs)
      if(count < 2 || count > 3){
        q.push(0)
      } else if(board[i][j] == 0 && count == 3){
        q.push(1)
      } else {
        q.push(board[i][j])
      }
    }
  }
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[0].length; j++){
      board[i][j] = q.shift()
    }
  }
  return board
};

const countLiving = (board, i, j, dirs) => {
  let count = 0
  for(const [x, y] of dirs){
    let nextx = j + x, nexty = i + y
    if(nextx < 0 || nextx >= board[0].length || nexty < 0 || nexty >= board.length) continue
    if(board[nexty][nextx] == 1) count++
  }
  return count
}