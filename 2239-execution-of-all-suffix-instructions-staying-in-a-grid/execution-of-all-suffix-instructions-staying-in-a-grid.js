const executeInstructions = function(n, startPos, s) {
    const grid = Array(n).fill(0).map((r) => Array(n).fill(0)), ans = []
    const dirs = {'R':[1,0], 'L':[-1,0], 'D':[0,1], 'U':[0,-1]}
    for(let i = 0; i < s.length; i++){
      const q = [[startPos[1],startPos[0],i,0]]
      while(q.length){
        const [x,y,dir,moves] = q.pop()
        if(!s[dir]){
          ans.push(moves)
          break
        }
        const nextPlace = [x + dirs[s[dir]][0], y + dirs[s[dir]][1]]
        if(nextPlace[0] < 0 || nextPlace[1] < 0 || nextPlace[0] >= n || nextPlace[1] >= n){
            ans.push(moves)  
        }else{
          q.push([...nextPlace,dir+1,moves+1])
        }
      }
    }
  return ans
};