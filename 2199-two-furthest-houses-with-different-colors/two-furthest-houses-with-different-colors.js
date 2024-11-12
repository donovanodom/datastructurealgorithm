const maxDistance = function(colors) {
  const map = {}
  for(let i = 0; i < colors.length; i++){
    const color = colors[i]
    if(!map[color]) map[color] = [Infinity,-1]
    map[color] = [Math.min(i, map[color][0]), Math.max(i, map[color][1])]
  }
  let max = 0
  const arr = Object.values(map)
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      max = Math.max(Math.abs(arr[i][0] - arr[j][1]), Math.abs(arr[i][1] - arr[j][0]), max)
    }
  }
  return max
}