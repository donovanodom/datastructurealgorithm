function isValidSudoku(board: string[][]): boolean {
  let i = 0, k = 0, seen = new Set()
  while(i < board.length){
    let j = 0
    while(j < board[i].length){
      let num = board[i][j]
      if(num !== '.'){
        if(seen.has(num + ' row ' + i) ||
          seen.has(num + ' col ' + j) ||
          seen.has(`${num} box ${Math.floor(i/3)}-${Math.floor(j/3)}`)){
          return false
        } else {
          seen.add(num + ' row ' + i)
          seen.add(num + ' col ' + j)
          seen.add(`${num} box ${Math.floor(i/3)}-${Math.floor(j/3)}`)
        }
      }
      j++
    }
    i++
  }
  return true
};