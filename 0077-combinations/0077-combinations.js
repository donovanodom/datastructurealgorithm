/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
  const ans = [], com = []
  const dfs = (i) => {
    if(com.length == k){
      ans.push([...com])
      return
    }
    for(let j = i; j <= n; j++){
      com.push(j)
      dfs(j + 1)
      com.pop()
    }
  }
  dfs(1)
  return ans
};