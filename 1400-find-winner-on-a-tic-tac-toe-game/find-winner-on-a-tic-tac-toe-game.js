/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = function(moves) {
  const board = Array(3).fill([]).map((arr) => Array(3).fill(null))
  let isA = true
  for(const [row, col] of moves){
    if(isA){
      board[row][col] = 'A'
      if(win('A', board)) return 'A'
    }else{
      board[row][col] = 'O'
      if(win('O', board)) return 'B'
    }
    isA = !isA
  }
  if(moves.length == 9) return "Draw"
  return "Pending"
};

const win = (p, board) => {
  let win = true
  for(let i = 0; i < 3; i++){
    if(board[i][i] != p) win = false
  }
  if(win) return true
  win = true
  for(let i = 0; i < 3; i++){
    if(board[i][2-i] != p) win = false
  }
  if(win) return true
  win = true
  for(let j = 0; j < 3; j++){
    if(board[0][j] != p) win = false
  }
  if(win) return true
  win = true
  for(let j = 0; j < 3; j++){
    if(board[1][j] != p) win = false
  }
  if(win) return true
  win = true
  for(let j = 0; j < 3; j++){
    if(board[2][j] != p) win = false
  }
  if(win) return true
  win = true
  for(let i = 0; i < 3; i++){
    if(board[i][0] != p) win = false
  }
  if(win) return true
  win = true
  for(let i = 0; i < 3; i++){
    if(board[i][1] != p) win = false
  }
  if(win) return true
  win = true
  for(let i = 0; i < 3; i++){
    if(board[i][2] != p) win = false
  }
  return win
}