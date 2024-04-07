const countTestedDevices = (percs) => {
  let count = 0
  for(let i = 0; i < percs.length; i++){
    if(percs[i] > 0){
      count++
      for(let j = i + 1; j < percs.length; j++){
        percs[j] = Math.max(0, percs[j] - 1)
      }
    }
  }
  return count
};