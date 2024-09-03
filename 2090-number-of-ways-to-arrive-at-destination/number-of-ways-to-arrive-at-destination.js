//Bellman's
const countPaths = function(n, roads) {
  const dp = Array(n).fill(Infinity), count = Array(n).fill(0), acc = Array(n).fill().map(() => Array(n).fill(0))
  dp[0] = 0
  count[0] = 1
  const traverse = (a, b, t) => {
  if (dp[a] < Infinity) {
      if(dp[a] + t < dp[b]) {
        dp[b] = dp[a] + t
        count[b] = count[a]
        acc[b][a] = count[a]
      }else if(dp[a] + t == dp[b]) {
        count[b] += count[a] - acc[b][a]
        count[b] = count[b] % 1000000007
        acc[b][a] = count[a]
      }
    }
  }
  for (let i = 0; i < n - 1; i++) {
    for (const [a, b, t] of roads) {
      traverse(a, b, t)
      traverse(b, a, t)
    }
  }
  return count[n - 1];
}

// Dikstra's TLE
// const countPaths = function(n, roads) {
//   const nodes = {}, dp = Array(n).fill().map(() => [Infinity,0])
//   for(const [a, b, time] of roads){
//     if(!nodes[a]) nodes[a] = []
//     if(b != 0) nodes[a].push([b,time])
//     if(!nodes[b]) nodes[b] = []
//     if(a != 0) nodes[b].push([a,time])
//   }
//   let q = [[0,0,[0]]], count = 0, min = Infinity
//   while(q.length){
//     const [node,time,path] = q.pop()
//     if(time > min) continue
//     if(time <= dp[node][0]){
//       if(time == dp[node][0]){
//         dp[node][1]++
//       }else if(time < dp[node][0]){
//         dp[node][1] = 1
//         dp[node][0] = time
//       }
//       if(node != n - 1){
//         for(const [c,t] of nodes[node]){
//           if(!path.includes(c)){
//             const nextTime = time + t, nextPath = [...path,c]
//            q.push([c, nextTime,nextPath])
//           }
//         }
//       }else{
//         min = Math.min(time,min)
//       }
//     }
//   }
//   return dp[n - 1][1] % 1000000007
// };

