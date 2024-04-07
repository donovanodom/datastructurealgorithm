const findSmallestSetOfVertices = (n, edges) => {
  const map = {}, ans = []
  //detect all nodes that have a parent
  for(const [x,y] of edges) map[y] = true
  //if a node has no parents it must be a starting
  //point so add it to the answer array
  for(let i = 0; i < n; i++){
    if(!map[i]) ans.push(i)
  }
  return ans
};