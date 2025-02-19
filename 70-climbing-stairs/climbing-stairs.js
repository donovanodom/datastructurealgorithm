const climbStairs = function(n) {
  if(n == 0 || n == 1) return 1
  const seq = [0,1]
  while(seq.length <= n + 1){
    seq.push(seq[seq.length - 1] + seq[seq.length - 2])
  }
  return seq[seq.length - 1]
};