const climbStairs = function(n) {
  if(n == 0 || n == 1) return 1
  const seq = [0,1]
  for(let i = 1; i < n + 1; i++){
    seq.push(seq[i] + seq[i-1])
  }
  return seq.pop()
};